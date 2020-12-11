import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRepository from './reducers/repository.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffects } from './effects/repository.effects';
import { RepositoryComponent } from './components/repository/repository.component';



@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRepository.repositoryFeatureKey, fromRepository.reducer),
    EffectsModule.forFeature([RepositoryEffects])
  ]
})
export class RepositoryModule { }
