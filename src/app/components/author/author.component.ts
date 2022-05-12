import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = 'My title'; //typeløst
  title2 : string = 'my title';

  author : IAuthor;
  authorList : IAuthor[] = [];

  constructor(private authorService:AuthorService) { //DI
    this.author={authorId:1, name:'Bo'}
    this.author={authorId:2, name:'Joe'}

    this.authorList = [
      {authorId:1, name:'Joe'},
      {authorId:2, name:'Bo'},
      {authorId:3, name:'Christian'}
    ];
    console.log(this.authorList);
   }

  ngOnInit(): void {
    //Kalde en metode.
    console.log(this.authorService.hansOgGrethe());

    //Hente værdi til liste fra vores service

      console.log(this.authorService.getAllAuthors());
      console.log(this.authorService.getAuthorById(1));
      //Invoke
      this.getAuthorById(2);

  }

  getAuthorById(authorId:number)
  {
    console.log(this.authorService.getAuthorById(authorId));
  }
}


