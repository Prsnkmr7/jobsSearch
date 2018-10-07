import { TestBed } from '@angular/core/testing';

import { FetchDetailsServiceService } from './fetch-details-service.service';

describe('FetchDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDetailsServiceService = TestBed.get(FetchDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
