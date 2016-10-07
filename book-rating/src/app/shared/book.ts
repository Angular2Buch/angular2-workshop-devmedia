export class Book {

  // this is my factory
  static empty() {
    let isbn = Math.random().toString(36).substr(2,9);
    return new Book(isbn, '', '', 0, '', '');
  }

  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 0,
    public author = '',
    public cover = ''
    ) {
  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 0) {
      this.rating--;
    }
  }

}
