import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  editTodoForm: FormGroup;
  existingTodo: Todo = new Todo();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((inbuiltId) => {

      if (inbuiltId) {
        console.log(inbuiltId);
        this.todoService.getTodoByInbuiltId(inbuiltId).then((todo: Todo) => {
          if (todo)
            this.existingTodo = todo;
          else
            alert("Empty Object!");
        });
      }
      else {
        alert("Empty id!");
      }

    });
  }

  createForm() {
    this.editTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onUpdate(formValue) {
    let todo: Todo = new Todo();
    todo.id = "5a940cc70122813e4458e15b";
    todo.name = "Yogesh";
    todo.isDone = !!formValue.isDone;
    todo.hasAttachment = false;

    this.todoService.addOrUpdateTodo(todo).then((result) => {
      if (result._body === "Updated") {
        this.router.navigate(['/list']);
      }
    });
  }


  onDelete(formValue) {
    let inbuiltId = "5a940cc70122813e4458e15b";

    console.log(inbuiltId);
    this.todoService.removeTodo(inbuiltId).then((result) => {
      if (result._body === "Deleted") {
        this.router.navigate(['/list']);
      }
    });
  }
}
