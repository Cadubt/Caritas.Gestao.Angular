import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigurationComponent } from './user-configuration.component';

describe('ConfigurationComponent', () => {
  let component: UserConfigurationComponent;
  let fixture: ComponentFixture<UserConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
