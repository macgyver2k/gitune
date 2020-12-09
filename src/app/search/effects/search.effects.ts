import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, debounceTime } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SearchActions from '../actions/search.actions';
import { RepositoriesGQL } from 'src/generated/graphql';

@Injectable()
export class SearchEffects {
  loadRepositorys$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.loadRepositories),
      concatMap((action) =>
        this.repositories
          .fetch({
            path: action.path,
          })
          .pipe(
            map((result) =>
              SearchActions.loadRepositoriesSuccess({
                repositories: result.data.repositories,
              })
            ),
            catchError((error) =>
              of(SearchActions.loadRepositoriesFailure({ error }))
            )
          )
      )
    );
  });

  loadRepositorysWhenSearchPathChanged$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.updateSearchPath),
      debounceTime(250),
      map((action) => SearchActions.loadRepositories({ path: action.path }))
    );
  });

  constructor(
    private actions$: Actions,
    private repositories: RepositoriesGQL
  ) {}
}
