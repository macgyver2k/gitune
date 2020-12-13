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
      .commits.filter((c) => state.commits[c.sha1].branch === props.branch)
      .map((commit) => ({
        commit,
        index: state.commits[commit.sha1].index,
      }))
);

export const commitAtIndex = createSelector(
  selectRepositoryState,
  (state, props) =>
    {
      const commit = state.index[props.index];
      const branchIndex = state.branches.findIndex( b => b.name == commit.branch );
      return {
        commit,
        branchIndex
      };
    }
);
