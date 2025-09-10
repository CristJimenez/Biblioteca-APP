import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/services/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  constructor(
    private readonly router: Router,
    private autSrv: Auth,
  ) {
    this.intiForm();
  }

  ngOnInit() {}

  public async doLogin() {
    try {
      await this.autSrv.logIn(
        this.email.value,
        this.password.value,
      );
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
    }
  }

  public intiForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

}
