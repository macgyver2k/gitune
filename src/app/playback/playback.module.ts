import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPlayback from './reducers/playback.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlaybackEffects } from './effects/playback.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPlayback.playbackFeatureKey, fromPlayback.reducer),
    EffectsModule.forFeature([PlaybackEffects])
  ]
})
export class PlaybackModule { }
