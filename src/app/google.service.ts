import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private _http: HttpClient) { }

  searchGoogleBooks(search) {
    return this._http.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyB2DmDMvrzr6RVnFGr6a2qkYkO1r0Zdl0I");
  }
}


