/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 我要卖Component } from './我要卖.component';

describe('我要卖Component', () => {
  let component: 我要卖Component;
  let fixture: ComponentFixture<我要卖Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 我要卖Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(我要卖Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
