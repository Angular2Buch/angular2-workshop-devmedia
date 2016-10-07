import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  @ViewChild(NgForm) form: NgForm;
  @Output() bookCreated = new EventEmitter<Book>();
  book = Book.empty();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    // name of formfields are the same of the book property
    this.form.reset(Book.empty());
  }

}
