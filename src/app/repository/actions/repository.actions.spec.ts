import * as fromRepository from './repository.actions';

describe('loadRepositorys', () => {
  it('should return an action', () => {
    expect(fromRepository.loadRepositorys().type).toBe('[Repository] Load Repositorys');
  });
});
