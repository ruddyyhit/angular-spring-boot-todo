import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


//decorator // in java annotation
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message: string = 'some message';
  name: '';

  // similiar to java type
  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) {

  }
  ngOnInit() {
    // it will run when this component initialize
    this.name = this.route.snapshot.params['name'];
  }

  welcomeMessage() {
     console.log(this.welcomeDataService.executeHelloWorldBeanService());
     this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
     );
     console.log('last line of welcomeMessage');
  }

  handleSuccessfulResponse(response){
    console.log(response);
  }
}
