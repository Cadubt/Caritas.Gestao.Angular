import { TestBed } from '@angular/core/testing';

import { ShelteredService } from './sheltered.service';

describe('ShelteredService', () => {
  let service: ShelteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
