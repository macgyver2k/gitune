import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSearch from '../search/reducers/search.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
