import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {GoogleService} from '../google.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  searchTerm: string = "";
  @Output() searchResults = new EventEmitter();

  constructor(private _google: GoogleService) { }

  ngOnInit() {
  }

  submitSearch () {
    this._google.searchGoogleBooks(this.searchTerm).subscribe(res => this.searchResults.emit(res["items"]));
  }

}
