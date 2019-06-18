import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTestComponent } from './label-test.component';

describe('LabelTestComponent', () => {
  let component: LabelTestComponent;
  let fixture: ComponentFixture<LabelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
