import { Action, createReducer, on } from '@ngrx/store';
import * as PlaybackActions from '../actions/playback.actions';

export const playbackFeatureKey = 'playback';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(PlaybackActions.startPlayback, state => state),

);

