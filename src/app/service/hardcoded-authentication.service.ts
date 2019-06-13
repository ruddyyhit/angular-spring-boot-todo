import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'Ruddyy' && password === 'winter') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logoutUser() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
