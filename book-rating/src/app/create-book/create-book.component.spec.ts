/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CreateBookComponent } from './create-book.component';

describe('Component: CreateBook', () => {
  it('should create an instance', () => {
    let component = new CreateBookComponent();
    expect(component).toBeTruthy();
  });
  it('should emit an event on add', () => {
    let component = new CreateBookComponent();
    let eventEmitted = false;
    component.bookCreated.subscribe(() => {
      eventEmitted = true;
    });
    component.add({value: 'testisbn'}, {value: 'testtitel'}, {value: 'testdesc'});
    expect(eventEmitted).toBe(true);
  })
});
