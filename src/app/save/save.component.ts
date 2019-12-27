import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  savedBookList = new Array<Book>();
  constructor(private _book: BookService) { }

  ngOnInit() {
    this._book.getBooks().subscribe(res => {
      this.savedBookList = res.map(item => {
        return new Book(item.title, item.authors, item.description, item.image, item.infoLink)
      })
    });
  }

}
