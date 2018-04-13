import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from './models/authentication.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged: boolean;
  ngOnInit() {
    this.logged = false;
  }
  logout() {
    this.logged = false;
  }
  login(logged: boolean) {

    this.logged = logged;
  }

}
