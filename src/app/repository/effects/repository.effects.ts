import { RepositoriesGQL } from './../../../generated/graphql';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, debounceTime } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RepositoryActions from '../actions/repository.actions';



@Injectable()
export class RepositoryEffects {

  loadRepositorys$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.loadRepositories),
      concatMap( action =>
        this.repositories.fetch( {
          path: action.path
        } ).pipe(
          map(result => RepositoryActions.loadRepositoriesSuccess({ repositories: result.data.repositories })),
          catchError(error => of(RepositoryActions.loadRepositoriesFailure({ error }))))
      )
    );
  });

  loadRepositorysWhenSearchPathChanged$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RepositoryActions.updateSearchPath),
      debounceTime(250),
      map( action => RepositoryActions.loadRepositories({ path: action.path })),
    );
  });

  constructor(
    private actions$: Actions,
    private repositories: RepositoriesGQL
    ) {

    }

}
