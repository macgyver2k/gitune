import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSearch from '../search/reducers/search.reducer';
import * as fromRepository from '../repository/reducers/repository.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromRepository.repositoryFeatureKey]: fromRepository.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer,
  [fromRepository.repositoryFeatureKey]: fromRepository.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
