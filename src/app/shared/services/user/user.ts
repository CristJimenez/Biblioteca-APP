import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/providers/auth/auth';
import { Query } from 'src/app/core/providers/query/query';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(
    private readonly authProv: Auth,
    private readonly queryProv: Query, 
  ) {}
  
}
