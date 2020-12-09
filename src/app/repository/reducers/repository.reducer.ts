import { RepositoriesQuery } from './../../../generated/graphql';
import { Action, createReducer, on } from '@ngrx/store';
import * as RepositoryActions from '../actions/repository.actions';

export const repositoryFeatureKey = 'repository';

export interface State {
  path?: string;
  repositories: RepositoriesQuery['repositories'];
}

export const initialState: State = {
  repositories: [],
};

export const reducer = createReducer(
  initialState,

  on(RepositoryActions.updateSearchPath, (state, action) => ({
    ...state,
    path: action.path,
  })),
  on(RepositoryActions.loadRepositories, (state) => state),
  on(RepositoryActions.loadRepositoriesSuccess, (state, action) => ({
    ...state,
    repositories: action.repositories,
  })),
  on(RepositoryActions.loadRepositoriesFailure, (state, action) => state)
);
