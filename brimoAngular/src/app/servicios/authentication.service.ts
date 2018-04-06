import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  loginUrl = '/login'; //'http://127.0.0.1:8080/login';
  logoutUrl = '/logout'; // 'http://127.0.0.1:8080/logout';
  constructor(public http: HttpClient) {}

  login(user: string, pwd: string) {
    this.http.get(this.loginUrl).subscribe(data => {   // data is a string
      console.log(data);
  });
    return;
  }
}
