import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from './models/authentication.model';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged: boolean;
  constructor(public login_service: AuthenticationService, private router: Router) {  }
  ngOnInit() {
    this.router.navigate(['login-page']);
    this.login_service.isLogged().then( (res) => {
      this.logged = res;
      if (!res) {
        this.router.navigate(['login-page']);
      } else {
        this.router.navigate(['']);
      }
    }).catch(() => {
      this.logged = false;
      this.router.navigate(['login-page']);
    });
  }
  logout() {
    this.logged = false;
    this.router.navigate(['login-page']);
  }
  login(logged: boolean) {
    if (!logged) {
      this.login_service.logout();
    }
    this.logged = logged;
  }

}
