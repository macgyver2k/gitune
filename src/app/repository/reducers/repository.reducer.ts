import { commitsIndexedSuccess } from './../actions/repository.actions';
import { BranchesQuery } from './../../../generated/graphql';
import { Action, createReducer, on } from '@ngrx/store';
import * as RepositoryActions from '../actions/repository.actions';

export const repositoryFeatureKey = 'repository';

export interface State {
  path?: string,
  branches: BranchesQuery['branches'],
  index: {
    [index:string] : {
      commit: {},
      branch: string
    }
  }
}

export const initialState: State = {
branches: [],
index: {}
};


export const reducer = createReducer(
  initialState,

  on(RepositoryActions.loadBranches, state => state),
  on(RepositoryActions.loadBranchesSuccess, (state, action) => state),
  on(RepositoryActions.loadBranchesFailure, (state, action) => state),
  on(RepositoryActions.setRepositoryPath, (state, action) => ({
    ...state,
    path: action.path
  })),
  on(RepositoryActions.loadBranchesSuccess, (state, action) => ({
    ...state,
    branches: action.branches
  })),
  on(RepositoryActions.commitsIndexedSuccess, (state, action) => ({
    ...state,
    index: action.commits
  })),
);

