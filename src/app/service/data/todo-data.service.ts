import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, JPA_URL } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  getAllData(username) {
    return this.http.get<Todo[]>(`${JPA_URL}/users/${username}/todos`);
  }

  deleteTodoList(username, id) {
    return this.http.delete(`${JPA_URL}/users/${username}/todos/${id}`);
  }
  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${JPA_URL}/users/${username}/todos/${id}`);
  }
  updateTodo(username,id, todo){
    return this.http.put(`${JPA_URL}/users/${username}/todos/${id}`,
                          todo);
  }
  createTodo(username, todo) {
    return this.http.post(`${JPA_URL}/users/${username}/todos`, todo);
  }
}
