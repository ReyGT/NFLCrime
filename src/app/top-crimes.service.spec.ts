import { TestBed } from '@angular/core/testing';

import { TopCrimesService } from './top-crimes.service';

describe('TopCrimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCrimesService = TestBed.get(TopCrimesService);
    expect(service).toBeTruthy();
  });
});
