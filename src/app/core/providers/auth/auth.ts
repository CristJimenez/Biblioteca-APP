import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(
    private readonly afb: AuthFirebase,
  ) {}

  async register(email: string, password: string) {
    const res = await createUserWithEmailAndPassword(
      this.afb,
      email,
      password
    );
    return res.user.uid;
  }

  async logIn(email: string, password: string) {
    try {
      const res = await signInWithEmailAndPassword(
        this.afb,
        email,
        password
      );
      return res.user.uid || '';
    } catch (error) {
      throw error;
    }
  }

  async logOut() {
    try {
      await signOut(this.afb);
    } catch (error) {
      throw error;
    }
  }
  
}
