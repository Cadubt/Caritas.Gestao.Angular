import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVisitComponent } from './past-visit.component';

describe('PastVisitComponent', () => {
  let component: PastVisitComponent;
  let fixture: ComponentFixture<PastVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
