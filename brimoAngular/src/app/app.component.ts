import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from './models/authentication.model';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged: boolean;
  constructor(public login_service: AuthenticationService) {  }
  ngOnInit() {
    this.login_service.isLogged().then( (res) => { this.logged = res; }).catch(() => { this.logged = false; });
  }
  logout() {
    this.logged = false;
  }
  login(logged: boolean) {
    if (!logged) {
      this.login_service.logout();
    }
    this.logged = logged;
  }

}
