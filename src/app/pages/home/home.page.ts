import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Auth } from 'src/app/core/providers/auth/auth';
import { Query } from 'src/app/core/providers/query/query';
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
  public uid: string = '';

  constructor(
    private booksSrv: Books,
    private readonly router: Router,
    private menuCtrl: MenuController,
    private readonly authSrv: Auth,
    private actRoute: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.uid = this.actRoute.snapshot.paramMap.get('uid') || '';
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
