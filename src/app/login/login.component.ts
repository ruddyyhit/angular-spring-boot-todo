import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
handleLogin() {

  if (this.username === 'Ruddyy' && this.password === 'winter') {
    this.invalidLogin = false;
  } else {
    this.invalidLogin = true;
  }
  console.log(this.username, this.password);
  }
}
