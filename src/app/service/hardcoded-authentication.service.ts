  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class HardcodedAuthenticationService {

    constructor() { }

    authenticate(username, password) {
    if (username === 'ruddyy' && password === 'winter') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }



  }
