import * as fromRepository from '../reducers/repository.reducer';
import { selectRepositoryState } from './repository.selectors';

describe('Repository Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRepositoryState({
      [fromRepository.repositoryFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
