import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;
  constructor(private hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
