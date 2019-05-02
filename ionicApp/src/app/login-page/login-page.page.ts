import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../models/authentication.model';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  
  username: string;
  password: string;
  errMsg: string;
  errClass: string;

  constructor(public login_service: AuthenticationService) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
/*
  login() {
    if (this.username === '' || this.password === '') {
      this.errMsg = 'Complete all fields.';
      this.errClass = '';
      return;
    }
    const auth_object = new AuthenticationModel(this.username, this.password);
    this.login_service.login(auth_object).then( res => {
      if (res === true) {
        console.log('login');
      }
    }).catch( (err) => {
      this.errClass = '';
      this.errMsg = 'Incorrect credentials. Try again.';
    });
  }*/

}
