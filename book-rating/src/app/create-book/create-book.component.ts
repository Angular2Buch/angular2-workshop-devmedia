import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  @Output() bookCreated = new EventEmitter<Book>();

  formValid = true;

  add(isbn, title, description) {

    if (!isbn.value) {
      this.formValid = false;
      return;
    }

    this.formValid = true;

    let book = new Book(isbn.value, title.value, description.value);
    this.bookCreated.emit(book);
    isbn.value = title.value = description.value = ''; // NOCH UNSCHÖN
  }
}
