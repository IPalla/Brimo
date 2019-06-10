import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPagePage } from './login-page.page';
import { AuthenticationService } from '../services/authentication.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPagePage],
  providers: [
    AuthenticationService
  ]
})
export class LoginPagePageModule {}
