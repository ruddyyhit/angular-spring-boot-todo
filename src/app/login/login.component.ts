import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleLogin() {

    if (this.username === 'Ruddyy' && this.password === 'winter') {
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]),
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username, this.password);
  }
}
