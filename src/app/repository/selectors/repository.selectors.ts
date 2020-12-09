import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRepository from '../reducers/repository.reducer';

export const selectRepositoryState = createFeatureSelector<fromRepository.State>(
  fromRepository.repositoryFeatureKey
);

export const repositories = createSelector(
  selectRepositoryState,
  (state) => state.repositories
);
