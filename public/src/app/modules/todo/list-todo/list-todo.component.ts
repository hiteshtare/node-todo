import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }

}
