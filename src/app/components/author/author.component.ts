import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  // title = 'My title'; //typeløst
  // title2: string = 'my title';

  authorList: IAuthor[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    // //Kalde en metode.
    // console.log(this.authorService.hansOgGrethe());

    // //Hente værdi til liste fra vores service

    // console.log(this.authorService.getAllAuthorsHC());
    // console.log(this.authorService.getAuthorByIdHC(1));
    // //Invoke
    // this.getAuthorById(2);

    //vi vil gerne simulere en API
    this.authorService.getAllAuthors().subscribe((data: any) => {
      console.log(data);
      this.authorList = data;
    });
  }

  // getAuthorById(authorId: number) {
  //   console.log(this.authorService.getAuthorByIdHC(authorId));
  // }

  createAuthor() {
    let author: IAuthor = { authorId: 0, name: 'Moe' };
    this.authorService.createAuthor(author).subscribe();
  }
  deleteAuthor() {
    //service subscribe
    // this.authorList.splice(0, 1); // position, antal
    // this.authorList.findIndex // hvilket objekt på hvilken index
    // this.authorList.filter // denne returnerer en liste uden det objekt vi vil fjerne
  }
}
