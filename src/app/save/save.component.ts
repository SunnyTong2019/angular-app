import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  savedBookList = new Array<Book>();
  constructor(private _book: BookService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this._book.getBooks().subscribe(res => {
      this.savedBookList = res.map(item => {
        return new Book(item._id, item.title, item.authors, item.description, item.image, item.infoLink)
      })
    });
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.delete-book');
    if (el) {
      el.addEventListener('click', this.deleteBook.bind(this));
    }
  }

  deleteBook(bookID) {
    this._book.deleteBook(bookID).subscribe(res => this.savedBookList = this.savedBookList.filter(item => item._id != bookID));
  }

}
