import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {EventEmitter} from '@angular/core';
import { AuthenticationModel } from '../models/authentication.model';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errMsg: string;
  errClass: string;

  constructor(public login_service: AuthenticationService, public shared_service: SharedService, private router: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login() {
    if (this.username === '' || this.password === '') {
      this.errMsg = 'Complete all fields.';
      this.errClass = '';
      return;
    }
    const auth_object = new AuthenticationModel(this.username, this.password);
    this.login_service.login(auth_object).then( res => {
      if (res === true) {
        this.shared_service.emitLoginChange(true);
      }
    }).catch( (err) => {
      this.errClass = '';
      this.errMsg = 'Incorrect credentials. Try again.';
    });
  }

}
