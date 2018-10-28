import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationModel } from '../../models/authentication.model';
import {EventEmitter} from '@angular/core';
import { SharedService } from '../../services/shared.service';

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
  errMsg: string;
  errClass: string;
  constructor(public login_service: AuthenticationService, public shared_service: SharedService) {
    this.login_emitter = new EventEmitter();
  }

  ngOnInit() {
    this.estado = false;
    this.claseUl = ' oculto';
    this.claseBoton = '';
    this.username = '';
    this.password = '';
    this.errClass = 'oculto2';
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
  logout() {
    this.shared_service.emitLoginChange(false);
  }
  show(id) {
    this.errClass = 'oculto2';
    const login = document.getElementById('evento_pop_up');
    if (id === 1) {
      login.style.display = 'block';
    } else {
      login.style.display = 'none';
    }
  }
  hide(id) {
    this.errClass = 'oculto2';
    const login = document.getElementById('evento_pop_up');
    login.style.display = 'none';
  }
}
