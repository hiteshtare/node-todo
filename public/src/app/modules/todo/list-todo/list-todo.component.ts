import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListTodoComponent implements OnInit {

  todos;
  displayedColumns = ['avatar', 'name', 'hasAttachment', 'IsDone', "actions"];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => {

      this.todos = new MatTableDataSource(todos);
      this.todos.sort = this.sort;
      this.todos.paginator = this.paginator;
    });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.todos.filter = filterValue;
  }
}
