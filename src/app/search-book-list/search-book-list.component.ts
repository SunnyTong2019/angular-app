import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-book-list',
  templateUrl: './search-book-list.component.html',
  styleUrls: ['./search-book-list.component.css']
})
export class SearchBookListComponent implements OnInit {

  @Input() bookList: object[];

  constructor(private _elementRef: ElementRef) {}

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.save-book');
    if(el)
    {
       el.addEventListener('click', this.saveBook.bind(this));
    }
  }

  ngOnInit() {
  }

  saveBook(book) {
    console.log(book);
  }

}
