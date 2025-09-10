import { Injectable } from '@angular/core';
import { Auth as AngularAuth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(
    private readonly afb: AngularAuth,
  ) {}

  async signIn(user: IUser) {
    try {
      const resp = await createUserWithEmailAndPassword(
        this.afb,
        user.email,
        user.password
      );
      console.log(resp);
    } catch (error) {
      console.log((error as any).message);
    }
  }
  
  async logIn(email: string, password:string) {
    try {
      const resp = await signInWithEmailAndPassword(
        this.afb,
        email,
        password
      );
      console.log(resp);
    } catch (error) {
      console.log((error as any).message);
    }
  }

}
