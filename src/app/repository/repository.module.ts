import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRepository from './reducers/repository.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffects } from './effects/repository.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRepository.repositoryFeatureKey, fromRepository.reducer),
    EffectsModule.forFeature([RepositoryEffects])
  ]
})
export class RepositoryModule { }
