import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getSingle(isbn: string): Observable<Book> {

    return this.http.get('http://book-monkey2-api.angular2buch.de/book/' + isbn)
      .map(response => response.json())
      .map(rawBook => new Book(
        rawBook.isbn,
        rawBook.title,
        rawBook.description,
        rawBook.rating,
        rawBook.authors.join(', '),
        rawBook.thumbnails[0].url
      ));
  }

  getAll(): Observable<Book[]> {

    return this.http.get('http://book-monkey2-api.angular2buch.de/books')
      .map(response => response.json())
      .map(rawBooks => rawBooks.map(
        rawBook => new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating
        )
      ));
  }

}
