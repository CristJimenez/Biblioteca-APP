import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {
    this.intiForm();
  }

  ngOnInit() {}

  public async doLogin() {
    this.router.navigate(['/home']);
    this.loginForm.reset();
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
