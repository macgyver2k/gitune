import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
