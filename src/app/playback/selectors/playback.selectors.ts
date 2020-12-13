import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayback from '../reducers/playback.reducer';

export const selectPlaybackState = createFeatureSelector<fromPlayback.State>(
  fromPlayback.playbackFeatureKey
);
