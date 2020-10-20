import { TestBed } from '@angular/core/testing';

import { NewShelteredAppointmentFormService } from './new-sheltered-appointment-form.service';

describe('NewShelteredAppointmentFormService', () => {
  let service: NewShelteredAppointmentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewShelteredAppointmentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
