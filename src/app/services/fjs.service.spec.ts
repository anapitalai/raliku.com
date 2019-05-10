import { TestBed } from '@angular/core/testing';

import { FjsService } from './fjs.service';

describe('FjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FjsService = TestBed.get(FjsService);
    expect(service).toBeTruthy();
  });
});
