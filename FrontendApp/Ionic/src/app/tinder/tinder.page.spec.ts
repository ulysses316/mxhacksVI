import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderPage } from './tinder.page';

describe('TinderPage', () => {
  let component: TinderPage;
  let fixture: ComponentFixture<TinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
