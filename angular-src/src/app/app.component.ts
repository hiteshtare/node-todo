import { GlobalService } from './shared/services/global.service';
import { Component } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
import { Todo } from './shared/models/todo.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo - MEAN App';
  todos: Todo[];

  constructor(private todoService: TodoService, public _globalService: GlobalService) {
    this.todoService.todosApiUrl = environment.todosApiUrl;
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }

}
