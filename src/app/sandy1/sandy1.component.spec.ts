import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandy1Component } from './sandy1.component';

describe('Sandy1Component', () => {
  let component: Sandy1Component;
  let fixture: ComponentFixture<Sandy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sandy1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sandy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
