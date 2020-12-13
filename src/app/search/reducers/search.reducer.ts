import { Action, createReducer, on } from '@ngrx/store';
import { RepositoriesQuery } from 'src/generated/graphql';
import * as SearchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface State {
  path?: string;
  repositories: RepositoriesQuery['repositories'];
}

export const initialState: State = {
  repositories: []
};


export const reducer = createReducer(
  initialState,

  on(SearchActions.updateSearchPath, (state, action) => ({
    ...state,
    path: action.path,
  })),
  on(SearchActions.loadRepositories, (state) => state),
  on(SearchActions.loadRepositoriesSuccess, (state, action) => ({
    ...state,
    repositories: action.repositories,
  })),
  on(SearchActions.loadRepositoriesFailure, (state, action) => state)

);

