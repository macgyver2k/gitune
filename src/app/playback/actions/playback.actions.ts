import { createAction, props } from '@ngrx/store';

export const startPlayback = createAction(
  '[Playback] Start Playback'
);

export const playbackFinished = createAction(
  '[Playback] Playback Finished'
);

export const playbackIndex = createAction(
  '[Playback] Playback Index',
  props<{index: number}>()
);




