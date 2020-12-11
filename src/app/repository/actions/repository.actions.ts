import { BranchesQuery } from './../../../generated/graphql';
import { createAction, props } from '@ngrx/store';

export const setRepositoryPath = createAction(
  '[Repository] Set Repository Path',
  props<{
    path: string
  }>()
);

export const loadBranches = createAction(
  '[Repository] Load Branches'
);

export const loadBranchesSuccess = createAction(
  '[Repository] Load Branches Success',
  props<{ branches: BranchesQuery['branches'] }>()
);

export const loadBranchesFailure = createAction(
  '[Repository] Load Branches Failure',
  props<{ error: any }>()
);

export const commitsIndexedSuccess = createAction(
  '[Repository] Commits Indexed Success',
  props<{ commits: {} }>()
);
