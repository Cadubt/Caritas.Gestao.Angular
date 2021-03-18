import { TestBed } from '@angular/core/testing';

import { SocialServiceService } from './social-service.service';

describe('SocialServiceService', () => {
  let service: SocialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
