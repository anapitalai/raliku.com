import { TestBed } from '@angular/core/testing';

import { CribService } from './crib.service';

describe('CribService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CribService = TestBed.get(CribService);
    expect(service).toBeTruthy();
  });
});
