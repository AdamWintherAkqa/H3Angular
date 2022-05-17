import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import IBook from '../interfaces/IBook';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl: string = 'https://localhost:44304/api/Books';
  constructor(private http: HttpClient) {} //dependency injection

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.baseUrl);
  }

  getBookById(bookId: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}/${bookId}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.baseUrl, book, httpOptions);
  }

  deleteBook(bookId: number): Observable<IBook> {
    return this.http.delete<IBook>(`${this.baseUrl}/${bookId}`, httpOptions);
  }
}
