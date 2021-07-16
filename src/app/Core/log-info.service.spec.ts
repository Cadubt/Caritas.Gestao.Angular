import { TestBed } from '@angular/core/testing';

import { LogInfoService } from './log-info.service';

describe('LogInfoService', () => {
  let service: LogInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
