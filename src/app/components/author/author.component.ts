import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import IAuthor from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/services/author.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  // title = 'My title'; //typeløst
  // title2: string = 'my title';;
  authorList: IAuthor[] = [];

  checked = false;

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((data: any) => {
      console.log(data);
      this.authorList = data;
    });
  }

  postAuthor() {
    this.authorForm.value.isAlive = this.checked;
    console.log(this.authorForm.value);
    this.authorService.createAuthor(this.authorForm.value).subscribe();

    this.authorList = [...this.authorList, this.authorForm.value];
  }

  getAuthorById(id: any) {
    var intId: number = +id;
    this.authorService.getAuthorById(intId).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe((data: any) => {
      // console.log(data);
    });
    this.authorList = this.authorList.filter((author) => author.authorId != id);
    console.log(this.authorList);
  }

  authorForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    isAlive: new FormControl(''),
  });

  onToggle(temp: any) {
    this.checked = temp.target.checked;
  }
}
