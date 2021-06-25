import { TestBed } from '@angular/core/testing';

import { PastVistService } from './past-vist.service';

describe('PastVistService', () => {
  let service: PastVistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastVistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
