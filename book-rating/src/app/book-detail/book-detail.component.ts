import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookStoreService: BookStoreService) {
      this.book = Book.empty();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let isbn = params['isbn'];
        this.bookStoreService.getSingle(isbn.toString())
            .subscribe(book => {
                this.book = book;
            })
    });
  }

}
