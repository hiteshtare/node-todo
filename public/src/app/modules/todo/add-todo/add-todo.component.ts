import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTodoComponent {

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:5000/api/upload' });

  addTodoForm: FormGroup;
  newTodo: Todo;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService,
    public customToastService: CustomToastService) {
    this.createForm();
  }

  createForm() {
    this.addTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onAdd(todo: Todo) {
    this.todoService.addOrUpdateTodo(todo).then((result) => {
      if (result._body === "Added") {
        this.customToastService.toastMessage("Todo added to the list.", "");
        this.clearFields();
      }
    });
  }

  onClear() {
    this.clearFields();
  }

  clearFields() {
    this.addTodoForm.reset();
  }
}
