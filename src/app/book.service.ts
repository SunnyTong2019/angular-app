import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  saveBook(book) {
    return this._http.post("/api/books", book);
  }

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>("/api/books");
  }

}
