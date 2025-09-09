import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from './services/auth/auth';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

const modules = [ FormsModule, ReactiveFormsModule, IonicModule, RouterModule ]
const services = [ Auth ]
const components = [ InputComponent, ButtonComponent ]

@NgModule({
  declarations: [ ...components ],
  providers: [ ...services ],
  imports: [CommonModule, ...modules, IonicModule],
  exports: [ ...modules, ...components ]
})
export class SharedModule { }
