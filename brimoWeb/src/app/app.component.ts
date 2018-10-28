import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from './models/authentication.model';
import { AuthenticationService } from './services/authentication.service';
import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  logged: boolean;

  constructor(public login_service: AuthenticationService, public shared_service: SharedService, private router: Router) {  }
  ngOnInit() {
    this.shared_service.loginObs.subscribe(data => {
      if (typeof(data) === 'boolean') {
        this.login(data);
      }
    });
    this.router.navigate(['login-page']);
    this.login_service.isLogged().then( (res) => {
      this.logged = res;
      this.login(res);
    }).catch(() => {
      this.login(false);
    });
  }
  logout() {
    this.login(false);
  }

  login(logged: boolean) {
    this.logged = logged;
    if (!logged) {
      this.login_service.logout();
      this.router.navigate(['login-page']);
    }
    this.router.navigate(['']);
    this.logged = logged;
  }

}
