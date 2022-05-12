import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IAuthor } from '../interfaces/IAuthor';
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

  // getAllAuthorsHC(): IAuthor[] {
  //   return [
  //     { authorId: 1, name: 'Moe' },
  //     { authorId: 2, name: 'Woop' },
  //     { authorId: 3, name: 'Bubber' },
  //   ];
  // }

  // createAuthor(create: string) {}

  getAllAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.baseUrl);
  }

  createAuthor(author: IAuthor): Observable<IAuthor> {
    return this.http.post<IAuthor>(this.baseUrl, author, httpOptions);
  }

  // getAuthorByIdHC(authorId: number): IAuthor {
  //   let authorList: IAuthor[] = [
  //     { authorId: 1, name: 'Moe' },
  //     { authorId: 2, name: 'Woop' },
  //     { authorId: 3, name: 'Bubber' },
  //   ];
  //   return authorList[authorId];
  // }

  // updateAuthor() {}
  // deleteAuthor() {}
  // getAuthorByTitle() {}
  // getAuthorByName(name: string) {}
  // getAuthorByBook() {}

  // hansOgGrethe(): string {
  //   return 'Hansi har kage';
  // }
}
