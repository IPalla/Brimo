import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../servicios/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estado: boolean; // False si el sub-menú está oculto.
  claseUl: string;
  claseBoton: string;
  estadoForm: boolean; // False si el form login está oculto.
  claseLoginForm: string;

  constructor() { }

  ngOnInit() {
    this.estado = false;
    this.estadoForm = false;
    this.claseUl = ' oculto';
    this.claseBoton = '';
    this.claseLoginForm = 'oculto2';
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
    this.estadoForm = !this.estadoForm;
    if (this.estadoForm) {
      this.claseLoginForm = '';
    }
    if (!this.estadoForm) {
      this.claseLoginForm = 'oculto2';
    }
  }
}
