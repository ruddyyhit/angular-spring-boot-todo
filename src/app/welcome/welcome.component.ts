import { Component, OnInit } from '@angular/core';


//decorator // in java annotation
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message : string = 'some message'
 
  //similiar to java type
  constructor() {

   }

  ngOnInit() {
  //it will run when this component initialize
}

}
