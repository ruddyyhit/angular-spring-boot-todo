import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//  import { ServerStreamFileResponseOptionsWithError } from 'http2';
//  import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';


// decorator // in java annotation
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message: string = 'some message';
  welcomeMessageFromService: string;
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
     // console.log(this.welcomeDataService.executeHelloWorldBeanService());
     this.welcomeDataService.executeHelloWorldBeanService()
     .subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
     );
     console.log('last line of welcomeMessage');
  }

  welcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanServicePathVariable(this.name).subscribe (
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
);
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

  handleSuccessfulResponse(response) {
    //  console.log(response);
    //  console.log(response.message)
     this.welcomeMessageFromService = response.message;
  }

}
