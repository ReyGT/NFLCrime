import { TestBed } from '@angular/core/testing';

import { TopPlayersForCrimeService } from './top-players-for-crime.service';

describe('TopPlayersForCrimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopPlayersForCrimeService = TestBed.get(TopPlayersForCrimeService);
    expect(service).toBeTruthy();
  });
});
