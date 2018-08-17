import { GlobalService } from './shared/services/global.service';
import { Component } from '@angular/core';
import { TodoService } from './shared/services/todo.service';
import { Todo } from './shared/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo - MEAN App';
  todos: Todo[];

  constructor(private todoService: TodoService, public _globalService: GlobalService) {
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
