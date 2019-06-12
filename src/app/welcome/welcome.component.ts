import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//decorator // in java annotation
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message: string = 'some message';
  name: '';

  //similiar to java type
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    //it will run when this component initialize
    this.name = this.route.snapshot.params['name'];
  }

  
}
