import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(
    private readonly afb: AuthFirebase,
  ) {}

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(this.afb, email, password);
  }

  async login() {}
  
}
