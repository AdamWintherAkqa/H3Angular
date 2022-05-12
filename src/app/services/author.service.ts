import { Injectable } from '@angular/core';
import { IAuthor } from '../interfaces/IAuthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
//Vores API
  constructor() { }

  getAllAuthors():IAuthor[]{
    return[
    {authorId:1, name:'Moe'},
    {authorId:2, name:'Woop'},
    {authorId:3, name:'Bubber'}
    ]}

  createAuthor(create: string) {}


  getAuthorById(authorId:number):IAuthor{
  let authorList:IAuthor[]=[
    {authorId:1, name:'Moe'},
    {authorId:2, name:'Woop'},
    {authorId:3, name:'Bubber'}

  ];
    return authorList[authorId];

  }



  updateAuthor(){}
  deleteAuthor(){}
  getAuthorByTitle(){}
  getAuthorByName(name: string){}
  getAuthorByBook(){}

  hansOgGrethe():string{
  return "Hansi har kage";

  }
}

