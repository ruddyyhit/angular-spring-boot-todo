import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'Ruddyy';
    // let password = 'winter';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      let basicAuthHeaderString =  this.basicAuthenticationService.getAuthenticationToken();
      let username = this.basicAuthenticationService.getAuthenticationUser();
      if (basicAuthHeaderString && username) {

        request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
  }
      return next.handle(request);
  }


}
