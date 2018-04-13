import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from '../../models/authentication.model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input() is_logged: boolean;
  @Output() login_emitter: EventEmitter<boolean>;
  estado: boolean; // False if sub-menu is hidden.
  claseUl: string;
  claseBoton: string;
  loginFormClass: string;
  logInButtonClass: string;
  logOutButtonClass: string;
  username: string;
  password: string;

  constructor(public login_service: AuthenticationService) {
    this.login_emitter = new EventEmitter();
  }

  ngOnInit() {
    this.estado = false;
    this.claseUl = ' oculto';
    this.claseBoton = '';
    this.username = '';
    this.password = '';
    if (this.is_logged) {
      this.logInButtonClass = 'oculto2';
      this.logOutButtonClass = '';
    } else {
      this.logOutButtonClass = 'oculto2';
      this.logInButtonClass = '';
    }
    this.loginFormClass = 'oculto2';
  }
  botonMenu() {
    this.estado = !this.estado;
    if (this.estado) {
      this.claseUl = ' ' ;
      this.claseBoton = ' oculto';
    }
    if (!this.estado) {
      this.claseUl = ' oculto' ;
      this.claseBoton = ' ';
    }
  }
  botonLogin() {
    if (this.is_logged) { return; }
    (this.loginFormClass === 'oculto2') ? this.loginFormClass = '' : this.loginFormClass = 'oculto2';
  }

  login() {
    if (this.username === '' || this.password === '') {
      return;
    }
    const auth_object = new AuthenticationModel(this.username, this.password);
    this.login_service.login(auth_object).then( res => {
      if (res === true) {
        this.login_emitter.emit(true);
      }
    }).catch(console.error);
  }
  logout() {
    this.login_emitter.emit(false);
  }
}
