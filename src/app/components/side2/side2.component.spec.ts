import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side2Component } from './side2.component';

describe('Side2Component', () => {
  let component: Side2Component;
  let fixture: ComponentFixture<Side2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Side2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Side2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
