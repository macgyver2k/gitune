import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlaybackEffects } from './playback.effects';

describe('PlaybackEffects', () => {
  let actions$: Observable<any>;
  let effects: PlaybackEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaybackEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PlaybackEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
