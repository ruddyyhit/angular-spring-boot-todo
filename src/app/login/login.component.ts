import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Ruddyy';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // router
  // Deepdnency Injection before we do like this in java
  //  Router router;
  //  constructor(router:Router){
  //    this.router = router;
  //  }
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {

    // (this.username === 'Ruddyy' && this.password === 'winter')
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]),
        this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username, this.password);
  }

  handleBasicAuthLogin() {

    // (this.username === 'Ruddyy' && this.password === 'winter')
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe (
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
 }

 handleJWTAuthLogin() {
   this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
   .subscribe(
     data => {
       console.log(data)
       this.router.navigate(['welcome',this.username])
       this.invalidLogin = false;
     },
     error => {
       console.log(error)
       this.invalidLogin = true
     }
   )
 }


}
