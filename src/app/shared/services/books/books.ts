import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '../../providers/http/http';

@Injectable({
  providedIn: 'root'
})
export class Books {

  private apiUrl = environment.URL_BOOKS;

  constructor(
    private readonly httpProv: Http,
  ) {}

  getBooks() {
    return this.httpProv.getUrl<any>(`${this.apiUrl}`).then(data => data.results);
  }

  searchBook(key: string) {
    const query = encodeURIComponent(key.trim());
    return this.httpProv.getUrl<any>(`${this.apiUrl}/?search=${query}`).then(data => data.results);
  }
  
}
