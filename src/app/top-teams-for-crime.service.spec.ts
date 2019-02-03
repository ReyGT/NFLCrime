import { TestBed } from '@angular/core/testing';

import { TopTeamsForCrimeService } from './top-teams-for-crime.service';

describe('TopTeamsForCrimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopTeamsForCrimeService = TestBed.get(TopTeamsForCrimeService);
    expect(service).toBeTruthy();
  });
});
