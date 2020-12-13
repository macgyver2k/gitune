import { commitAtIndex } from './../../repository/selectors/repository.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as Tone from 'tone'


import { concatMap, delay, repeat, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PlaybackActions from '../actions/playback.actions';
import { branches } from 'src/app/repository/selectors/repository.selectors';
import { Store } from '@ngrx/store';


@Injectable()
export class PlaybackEffects {
  filter = new Tone.Filter(800, 'lowpass');
  feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
  distortion = new Tone.Distortion(0.01).toDestination();


  synth = new Tone.Synth();

  startPlayback$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaybackActions.startPlayback),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(branches)))
      ),
      concatMap((branches) => of(PlaybackActions.playbackIndex({ index: 0 })))
    );
  });

  playbackIndex$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaybackActions.playbackIndex),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(commitAtIndex, { index: action.index })))
      ),
      concatMap(([action,commit]) => {
        const now = Tone.now()
        this.synth.triggerAttack( Math.round( 512- commit.branchIndex * 32 ).toString(16), "1n", now);
        this.synth.triggerRelease(now + 1)
        return of(PlaybackActions.playbackIndex({ index: action.index+1 }));
      }),
      delay( 2 ),
    );
  });

  constructor(private actions$: Actions, private store: Store ) {
    // connect the player to the feedback delay and filter in parallel
    //this.synth.connect(this.filter);
    //this.synth.connect(this.feedbackDelay);

    //this.synth.toDestination();

    //this.distortion.toDestination();
    //this.synth.connect( this.distortion );
    this.synth.connect( this.feedbackDelay );


  }

}
