import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import IAuthor from '../interfaces/IAuthor';
// 1)Benytte en class der hedder HttpClient - denne service giver os Http, features - HUSK module.ts
// 2)Async opsætning - hedder Observable
// 3)Definer en URL til mit API
// 4)HttpHeaders - hvilket format sender vi i? der er en del forskellige ddd
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  //Vores API
  baseUrl: string = 'https://localhost:44304/api/Authors';
  constructor(private http: HttpClient) {} //dependency injection

  getAllAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.baseUrl);
  }

  getAuthorById(authorId: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.baseUrl}/${authorId}`);
  }

  createAuthor(author: IAuthor): Observable<IAuthor> {
    return this.http.post<IAuthor>(this.baseUrl, author, httpOptions);
  }

  deleteAuthor(authorId: number): Observable<IAuthor> {
    return this.http.delete<IAuthor>(
      `${this.baseUrl}/${authorId}`,
      httpOptions
    );
  }
}
