/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 我要买Component } from './我要买.component';

describe('我要买Component', () => {
  let component: 我要买Component;
  let fixture: ComponentFixture<我要买Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 我要买Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(我要买Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
