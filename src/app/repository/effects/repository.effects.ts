import { branches } from './../selectors/repository.selectors';
import {
  BranchesGQL,
  BranchesQuery,
  CommityType,
} from './../../../generated/graphql';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RepositoryActions from '../actions/repository.actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { repositoryPath } from '../selectors/repository.selectors';

@Injectable()
export class RepositoryEffects {
  loadBranches$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.loadBranches),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(repositoryPath)))
      ),
      concatMap(([action, path]) =>
        this.branches
          .fetch({
            repository: path,
          })
          .pipe(
            map((data) =>
              RepositoryActions.loadBranchesSuccess({
                branches: data.data.branches,
              })
            ),
            catchError((error) =>
              of(RepositoryActions.loadBranchesFailure({ error }))
            )
          )
      )
    );
  });

  setRepositoryPathAfterRouting$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map((route) =>
        RepositoryActions.setRepositoryPath({
          path: route.payload.routerState.root.queryParams.repository,
        })
      )
    );
  });

  loadBranchesAfterPathChanged$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.setRepositoryPath),
      map(() => RepositoryActions.loadBranches())
    );
  });

  indexCommitsAfterBranchesLoaded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.loadBranchesSuccess),
      map((action) => {
        var result = this.indexCommits(action.branches);
        return RepositoryActions.commitsIndexedSuccess({
          commits: result.commtIndex,
          index: result.commitForwardIndex,
        });
      })
    );
  });

  indexCommits(branches: BranchesQuery['branches']) {
    const commtIndex = {};
    const commitForwardIndex = [];
    const commits: {
      branch: string;
      commit: { sha1: string; timestamp: Date; parents: string[] };
      time: number;
    }[] = [];

    for (const branch of branches) {
      for (const commit of branch.commits) {
        const timestamp = Date.parse(commit.timestamp);
        commits.push({ commit: commit, branch: branch.name, time: timestamp });
      }
    }

    const sorted = commits.sort((a, b) => a.time - b.time);

    let subIndex = 0;

    for (let index = 0; index < sorted.length; index++) {
      const commit = sorted[index];
      if (commtIndex[commit.commit.sha1] === undefined) {
        commtIndex[commit.commit.sha1] = {
          index: subIndex,
          branch: commit.branch,
        };
        commitForwardIndex.push(commit);
        subIndex++;
      }
    }

    return { commtIndex, commitForwardIndex };
  }

  constructor(
    private actions$: Actions,
    private store: Store,
    private branches: BranchesGQL
  ) {}
}
