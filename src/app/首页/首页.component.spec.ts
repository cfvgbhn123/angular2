/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 首页Component } from './首页.component';

describe('首页Component', () => {
  let component: 首页Component;
  let fixture: ComponentFixture<首页Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 首页Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(首页Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
