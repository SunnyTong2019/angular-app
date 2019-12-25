import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-book-list',
  templateUrl: './search-book-list.component.html',
  styleUrls: ['./search-book-list.component.css']
})
export class SearchBookListComponent implements OnInit {
   
  @Input() bookList:object[];
  constructor() { }

  ngOnInit() {
  }

}
