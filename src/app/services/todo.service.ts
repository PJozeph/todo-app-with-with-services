import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todo');
  }

  updateTodoStatus(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`http://localhost:3000/todo/${todo.id}`, todo);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('http://localhost:3000/todo', todo);
  }

}
