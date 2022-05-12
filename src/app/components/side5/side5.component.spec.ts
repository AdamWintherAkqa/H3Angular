import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side5Component } from './side5.component';

describe('Side5Component', () => {
  let component: Side5Component;
  let fixture: ComponentFixture<Side5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Side5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Side5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
