import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: object[];
  constructor() { }

  ngOnInit() {
  }

  setSearchResults(searchResults) {
    this.searchResults = searchResults;
  }

}
