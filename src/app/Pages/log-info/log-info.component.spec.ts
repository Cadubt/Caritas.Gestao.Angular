import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInfoComponent } from './log-info.component';

describe('LogInfoComponent', () => {
  let component: LogInfoComponent;
  let fixture: ComponentFixture<LogInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
