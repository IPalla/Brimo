import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest, HttpHeaders } from '@angular/common/http';


const URLAPI = window.location.origin;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AuthenticationService {

  url: string;

  constructor (public http: HttpClient) {
    this.url = URLAPI;
  }
  login(auth_object) {
    const url_login = this.url + '/login';
    return this.http.post(url_login, JSON.stringify(auth_object)).toPromise().then( (response: any) => {
      console.log(response);
      return response;
    });
  }
  logout() {
    const url_logout = this.url + '/login';
    return this.http.get(url_logout).toPromise().then( (response: any) => {
      console.log(response);
      return response;
    });
  }

}
