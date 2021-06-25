import { TestBed } from '@angular/core/testing';

import { PastVisitService } from './past-visit.service';

describe('PastVisitService', () => {
  let service: PastVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
