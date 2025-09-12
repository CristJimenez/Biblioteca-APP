import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IBook } from 'src/app/interfaces/book.interface';
import { Auth } from 'src/app/shared/services/auth/auth';
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
    private readonly authSrv: Auth,
    private menuCtrl: MenuController,
  ) {}

  async ngOnInit() {
    this.books = await this.booksSrv.getBooks();
  }

  public async searchBook(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.books = await this.booksSrv.searchBook(query);
  }

  public async logOut() {
    await this.authSrv.logOut();
    this.router.navigate(['/login']);
    this.menuCtrl.close();
  }

}
