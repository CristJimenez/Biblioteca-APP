import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book.interface';
import { Books } from 'src/app/shared/services/books/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  public books: IBook[] = [];

  constructor(
    private booksSrv: Books,
    private readonly router: Router,
  ) {}

  async ngOnInit() {
    this.books = await this.booksSrv.getBooks();
    console.log(this.books);
  }

  public logOut() {
    this.router.navigate(['/login']);
  }

}
