import { RepositoesQuery } from './../../../generated/graphql';
import { Action, createReducer, on } from '@ngrx/store';
import * as RepositoryActions from '../actions/repository.actions';

export const repositoryFeatureKey = 'repository';

export interface State {
  path?: string;
  repositories: RepositoesQuery['repositories'];
}

export const initialState: State = {
  repositories: []
};


export const reducer = createReducer(
  initialState,

  on(RepositoryActions.loadRepositories, state => state),
  on(RepositoryActions.loadRepositoriesSuccess, (state, action) => state),
  on(RepositoryActions.loadRepositoriesFailure, (state, action) => state),

);

