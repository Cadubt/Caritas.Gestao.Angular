import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlthorizeSheltRegisterComponent } from './althorize-shelt-register.component';

describe('AlthorizeSheltRegisterComponent', () => {
  let component: AlthorizeSheltRegisterComponent;
  let fixture: ComponentFixture<AlthorizeSheltRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlthorizeSheltRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlthorizeSheltRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
