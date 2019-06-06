import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "hello {{title}}",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message= ' Jungle';
  answer = 'home';
}
