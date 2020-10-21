import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShelteredAppointmentFormComponent } from './new-sheltered-appointment-form.component';

describe('NewShelteredAppointmentFormComponent', () => {
  let component: NewShelteredAppointmentFormComponent;
  let fixture: ComponentFixture<NewShelteredAppointmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShelteredAppointmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShelteredAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
