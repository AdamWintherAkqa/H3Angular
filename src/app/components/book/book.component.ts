import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import IBook from 'src/app/interfaces/IBook';
import { BookService } from 'src/app/services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookList: IBook[] = [];

  checked = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data: any) => {
      console.log(data);
      this.bookList = data;
    });
  }

  postBook() {
    this.bookForm.value.isAlive = this.checked;
    console.log(this.bookForm.value);
    this.bookService.createBook(this.bookForm.value).subscribe();

    this.bookList = [...this.bookList, this.bookForm.value];
  }

  getBookById(id: any) {
    var intId: number = +id;
    this.bookService.getBookById(intId).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe((data: any) => {
      // console.log(data);
    });
    this.bookList = this.bookList.filter((book) => book.bookId != id);
    console.log(this.bookList);
  }

  bookForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    isAlive: new FormControl(''),
  });

  onToggle(temp: any) {
    this.checked = temp.target.checked;
  }
}
