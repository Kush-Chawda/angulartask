import { TestBed } from '@angular/core/testing';

import { GetdataserviceService } from './getdataservice.service';

describe('GetdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdataserviceService = TestBed.get(GetdataserviceService);
    expect(service).toBeTruthy();
  });
});
