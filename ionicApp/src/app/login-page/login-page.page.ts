import { Component, OnInit } from '@angular/core';


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

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
  login() {
  }

}
