/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarReservationComponent } from './car-reservation.component';

describe('CarReservationComponent', () => {
  let component: CarReservationComponent;
  let fixture: ComponentFixture<CarReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
