import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

const token_key = 'tknBrM';
const URLAPI = 'https://192.168.1.40:3000/brimo/login-api'; // window.location.origin;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;

  constructor (public http: HttpClient) {
    this.url = URLAPI;
  }
  login(auth_object) {
    const url_login = this.url + '/login';
    return this.http.post(url_login, auth_object).toPromise().then( (response: any) => {
      console.log(response);
      localStorage.setItem(token_key, response.tkn_auth);
      return true;
    }).catch( (err) => {
      console.log(err);
      return false;
    });
  }
  logout() {
    localStorage.removeItem(token_key);
  }
  isLogged() {
    const urlget = this.url + '/devices';
    const headers = this.getHeaders();
    if (!headers) { throw -1; }
    return this.http.get(urlget, headers).toPromise().then( (response: any) => {
      if (response.status === 401) {
        return false;
      }
      return true;
    }).catch(() => false );
  }
  getToken() {
    return localStorage.getItem(token_key);
  }
  getHeaders() {
    const token = this.getToken();
    if (!token) { return undefined; }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token,
      })
    };
    return httpOptions;
  }
}
