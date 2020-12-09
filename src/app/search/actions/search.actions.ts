import { createAction, props } from '@ngrx/store';
import { RepositoriesQuery } from 'src/generated/graphql';

export const updateSearchPath = createAction(
  '[Search] Update Search Path',
  props<{
    path: string
  }>()
);

export const loadRepositories = createAction(
  '[Search] Load Repositories',
  props<{
    path: string
  }>()
);

export const loadRepositoriesSuccess = createAction(
  '[Search] Load Repositories Success',
  props<{ repositories: RepositoriesQuery['repositories'] }>()
);

export const loadRepositoriesFailure = createAction(
  '[Search] Load Repositories Failure',
  props<{ error: any }>()
);
