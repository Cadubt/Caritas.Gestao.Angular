import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShelteredComponent } from './new-sheltered.component';

describe('NewShelteredComponent', () => {
  let component: NewShelteredComponent;
  let fixture: ComponentFixture<NewShelteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShelteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShelteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
