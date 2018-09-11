import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

  headers: Headers;
  options: RequestOptions;

  // For Developement
  public todosApiUrl = '';
  public todosUploadUrl = `${this.todosApiUrl}/todos/upload`;
  // For Developement

  // For Production
  //private todosApiUrl = '';
  //public todosUploadUrl = '';
  // For Production

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  //Fetch all todos configured in DB
  getTodos(): Promise<Todo[]> {
    const url = `${this.todosApiUrl}todos`;

    return this.http.get(url).toPromise().then(response => response.json() as Todo[]);
  }

  //Fetch all todos configured with username passed as param
  getTodosByUserName(username: string): Promise<Todo[]> {
    const url = `${this.todosApiUrl}todos/username/${username}`;

    return this.http.get(url).toPromise().then(response => response.json() as Todo[]);
  }

  //Fetch a todo with id(in-built) passed as param
  getTodoByInbuiltId(inbuiltId: string): Promise<Todo> {
    const url = `${this.todosApiUrl}todos/id/${inbuiltId}`;

    return this.http.get(url).toPromise().then(response => response.json() as Todo);
  }

  //Create or Update a todo with id (in-built) passed as param
  addOrUpdateTodo(todo: Todo): Promise<any> {

    const body = JSON.stringify(todo);
    const url = `${this.todosApiUrl}todos/`;

    return this.http.post(url, body, { headers: this.headers }).toPromise().then((response) => { console.log(response); return response; });
  }

  //Remove a todo with id (in-built) passed as param
  removeTodo(inbuiltId: string): Promise<any> {
    const url = `${this.todosApiUrl}todos/${inbuiltId}`;

    return this.http.delete(url).toPromise().then((response) => { console.log(response); return response; });
  }

  //Remove an attachment with id (in-built) and filename passed as param
  removeTodoAttachment(inbuiltId: string, fileName: string): Promise<any> {
    const url = `${this.todosApiUrl}todos/attachments/${inbuiltId}/${fileName}`;

    return this.http.delete(url).toPromise().then((response) => { console.log(response); return response; });
  }
}
