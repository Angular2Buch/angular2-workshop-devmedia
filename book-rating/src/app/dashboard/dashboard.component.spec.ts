/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';

describe('Component: Dashboard', () => {
  it('should create an instance', () => {
    let component = new DashboardComponent();
    expect(component).toBeTruthy();
  });

  describe('with the function add, which', () => {
    it('should add a book', () => {
      let component = new DashboardComponent();
      let book = new Book('812', 'Test Title', 'Test description');
      component.ngOnInit();
      component.add(book);
      expect(component.books.length).toEqual(3);
    });
  });
});

