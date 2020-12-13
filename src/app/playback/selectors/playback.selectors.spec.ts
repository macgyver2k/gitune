import * as fromPlayback from '../reducers/playback.reducer';
import { selectPlaybackState } from './playback.selectors';

describe('Playback Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlaybackState({
      [fromPlayback.playbackFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
