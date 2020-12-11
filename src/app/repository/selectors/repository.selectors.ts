import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRepository from '../reducers/repository.reducer';

export const selectRepositoryState = createFeatureSelector<fromRepository.State>(
  fromRepository.repositoryFeatureKey
);

export const repositoryPath = createSelector(
  selectRepositoryState,
  (state) => state.path
);

export const branches = createSelector(
  selectRepositoryState,
  (state) => state.branches
);

export const branchCommits = createSelector(
  selectRepositoryState,
  (state, props) =>
    state.branches
      .find((b) => b.name == props.branch)
      .commits.filter((c) => state.index[c.sha1].branch === props.branch)
      .map((commit) => ({
        commit,
        index: state.index[commit.sha1].index,
      }))
);
