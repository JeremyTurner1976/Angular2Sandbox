/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from
  '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalesPeopleComponent } from
  './sales-people.component';

describe('SalesPeopleComponent', () => {
  let component: SalesPeopleComponent;
  let fixture: ComponentFixture<SalesPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
