import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelteredAppointmentsComponent } from './sheltered-appointments.component';

describe('ShelteredAppointmentsComponent', () => {
  let component: ShelteredAppointmentsComponent;
  let fixture: ComponentFixture<ShelteredAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelteredAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelteredAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
