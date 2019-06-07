import { Component, OnInit } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos = [
    new Todo(1, 'Learn to code in React', false, new Date()),
    new Todo(2, 'Learn to code in Angular', false, new Date()),
    new Todo(3, 'Learn to code in Java', true, new Date()),
  ];
  // todos = [
  //   {
  //     id: 1,
  //     description: 'Learn to code in React'
  //   },
  //   {
  //     id: 2,
  //     description: 'Learn to code in Angular'
  //   },
  //   {
  //     id: 3,
  //     description: 'Learn to code in Java'
  //   }
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to DANCE'
  // };
  constructor() { }

  ngOnInit() {
  }

}
