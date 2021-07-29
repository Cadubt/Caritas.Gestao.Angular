import { TestBed } from '@angular/core/testing';

import { AlthorizeSheltRegisterService } from './althorize-shelt-register.service';

describe('AlthorizeSheltRegisterService', () => {
  let service: AlthorizeSheltRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlthorizeSheltRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
