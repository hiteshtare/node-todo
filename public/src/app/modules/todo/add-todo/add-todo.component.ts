import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  addTodoForm: FormGroup;
  newTodo: Todo;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.createForm();
  }

  createForm() {
    this.addTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onAdd(todo: Todo) {
    this.todoService.addOrUpdateTodo(todo).then((result) => {
      if (result._body === "Added") {
        this.addTodoForm.reset();
      }
    });
  }
}
