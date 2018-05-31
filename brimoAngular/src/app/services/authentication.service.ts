import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest, HttpHeaders } from '@angular/common/http';

const token_key = 'tknBrM';
const URLAPI = 'http://localhost:8080'; // window.location.origin;


@Injectable()
export class AuthenticationService {

  url: string;

  constructor (public http: HttpClient) {
    this.url = URLAPI;
  }
  login(auth_object) {
    const url_login = this.url + '/login';
    return this.http.post(url_login, auth_object).toPromise().then( (response: any) => {
      localStorage.setItem(token_key, response.tkn_auth);
      return true;
    }).catch( () => false);
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
        'Authorization': token,
      })
    };
    return httpOptions;
  }
}
