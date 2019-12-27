import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import { BookService } from "../book.service";

@Component({
  selector: 'app-search-book-list',
  templateUrl: './search-book-list.component.html',
  styleUrls: ['./search-book-list.component.css']
})
export class SearchBookListComponent implements OnInit {

  @Input() bookList: object[];

  constructor(private _elementRef: ElementRef, private _book: BookService) { }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.save-book');
    if (el) {
      el.addEventListener('click', this.saveBook.bind(this));
    }
  }

  ngOnInit() {
  }

  saveBook(book) {
    this._book.saveBook(book).subscribe(res => {
      if (res["_id"]) {
        alert("Saved successfully!");
      }
      else if (res.toString() === "Already Saved") {
        alert("Already Saved!");
      }
    }
    );
  }

}
