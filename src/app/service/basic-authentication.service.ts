import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export  const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  // authenticate(username, password) {
  //   if (username === 'Ruddyy' && password === 'winter') {
  //     sessionStorage.setItem('authenticaterUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders(
     {
       Authorization: basicAuthHeaderString
     }
   );
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    }
 // http://localhost:8080/hello-world/path-variable/hitesh

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticationUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticationToken() {
    if (this.getAuthenticationUser()) {
    return sessionStorage.getItem(TOKEN);
    }
  }

  logoutUser() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
    constructor(public message: string) {

    }
  }

