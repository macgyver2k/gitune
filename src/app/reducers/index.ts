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
import * as fromPlayback from '../playback/reducers/playback.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromRepository.repositoryFeatureKey]: fromRepository.State;  [fromPlayback.playbackFeatureKey]: fromPlayback.State;

}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer,
  [fromRepository.repositoryFeatureKey]: fromRepository.reducer,
  [fromPlayback.playbackFeatureKey]: fromPlayback.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
