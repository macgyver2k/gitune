import { RepositoriesQuery } from './../../../generated/graphql';
import { createAction, props } from '@ngrx/store';

export const updateSearchPath = createAction(
  '[Repository] Update Search Path',
  props<{
    path: string
  }>()
);

export const loadRepositories = createAction(
  '[Repository] Load Repositories',
  props<{
    path: string
  }>()
);

export const loadRepositoriesSuccess = createAction(
  '[Repository] Load Repositories Success',
  props<{ repositories: RepositoriesQuery['repositories'] }>()
);

export const loadRepositoriesFailure = createAction(
  '[Repository] Load Repositories Failure',
  props<{ error: any }>()
);
