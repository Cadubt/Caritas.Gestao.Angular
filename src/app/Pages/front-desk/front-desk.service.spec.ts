import { TestBed } from '@angular/core/testing';

import { FrontDeskService } from './front-desk.service';

describe('FrontDeskService', () => {
  let service: FrontDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
