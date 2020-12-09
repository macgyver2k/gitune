import * as fromRepository from './repository.actions';

describe('loadRepositories', () => {
  it('should return an action', () => {
    expect(fromRepository.loadRepositories( { path: 'path' } ).type).toBe('[Repository] Load Repositories');
  });
});
