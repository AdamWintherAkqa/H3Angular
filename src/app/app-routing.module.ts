import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Side1Component } from './components/side1/side1.component';
import { Side2Component } from './components/side2/side2.component';
import { Side5Component } from './components/side5/side5.component';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  { path: 'side1', component: Side1Component },
  { path: 'side2', component: Side2Component },
  { path: 'side5', component: Side5Component },
  { path: 'author', component: AuthorComponent },
  { path: 'book', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//½
