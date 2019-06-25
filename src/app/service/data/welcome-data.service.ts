import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: String) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log('execute hello world bean service');
  }

  executeHelloWorldBeanServicePathVariable(name) {
  //   let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  //   let headers = new HttpHeaders(
  //    {
  //      Authorization: basicAuthHeaderString
  //    }
  //  );
  
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
     // {headers}
     );
    }
 // http://localhost:8080/hello-world/path-variable/hitesh

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'Ruddyy';
  //   let password = 'winter';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

// Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Ruddyy'
//  from origin 'http://localhost:4200' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource.

// Access to XMLHttpRequest at
//  'http://localhost:8080/hello-world/path-variable/Ruddyy' 
// from origin 'http://localhost:4200' has been blocked by CORS policy: 
// Response to preflight request doesn't pass access control check: It does not have HTTP ok status.

}
