/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 我的Component } from './我的.component';

describe('我的Component', () => {
  let component: 我的Component;
  let fixture: ComponentFixture<我的Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 我的Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(我的Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
