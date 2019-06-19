import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
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

  todos: Todo[];
  message: string;

  // todos = [
  //   new Todo(1, 'Learn to code in React', false, new Date()),
  //   new Todo(2, 'Learn to code in Angular', false, new Date()),
  //   new Todo(3, 'Learn to code in Java', true, new Date()),
  // ];

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }
  deleteTodo(id) {
    console.log(`value deleted ${id}`);
    this.todoService.deleteTodoList('Ruddyy', id).subscribe(
      response => {
        this.message = `Deleted ${id} Successfully`;
        this.refreshTodo();
      }
    );
  }
  refreshTodo() {
    this.todoService.getAllData('Ruddyy').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  updateTodo(id) {
    this.todoService.getAllData('Ruddyy').subscribe(
      response => {
        console.log(`Update ${id}`);
        this.router.navigate(['todos', id]);
      }
    );
  }
  addTodo() {
    console.log('added successfully');
    this.router.navigate(['todos', -1]);
  }
}
