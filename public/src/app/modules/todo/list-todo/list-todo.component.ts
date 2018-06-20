import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListTodoComponent implements OnInit {

  todos;
  displayedColumns = ['avatar', 'name', 'Attachment', 'Done', "actions"];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().then((todos: Todo[]) => {
      this.todos = new MatTableDataSource(todos);

      this.sortedData = this.todos.filteredData;//To extract data from todos
    });
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.todos.filter = filterValue;
  }

  sortedData;

  sortData(sort: Sort) {//Sorting logic
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'Attachment': return this.compare(a.Attachment, b.Attachment, isAsc);
        case 'Done': return this.compare(a.Done, b.Done, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {//Function for comparing two adjacent values
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
