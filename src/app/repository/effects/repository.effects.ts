import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RepositoryActions from '../actions/repository.actions';



@Injectable()
export class RepositoryEffects {

  loadRepositorys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(RepositoryActions.loadRepositorys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => RepositoryActions.loadRepositorysSuccess({ data })),
          catchError(error => of(RepositoryActions.loadRepositorysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
