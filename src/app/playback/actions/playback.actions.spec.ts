import * as fromPlayback from './playback.actions';

describe('loadPlaybacks', () => {
  it('should return an action', () => {
    expect(fromPlayback.loadPlaybacks().type).toBe('[Playback] Load Playbacks');
  });
});
