import { TestBed } from '@angular/core/testing';

import { RecordVisitService } from './record-visit.service';

describe('RecordVisitService', () => {
  let service: RecordVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
