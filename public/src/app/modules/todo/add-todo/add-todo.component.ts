import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { FileUploader, FileItem } from 'ng2-file-upload';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTodoComponent {

  addTodoForm: FormGroup;
  newTodo: Todo;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService,
    public customToastService: CustomToastService) {
    this.createForm();
  }

  public uploader: FileUploader = new FileUploader({ url: this.todoService.todosUploadUrl });

  createForm() {
    this.addTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onAdd(todo: Todo) {
    todo.hasAttachment = false;

    let fileQueue: FileItem[] = this.uploader.queue;
    fileQueue.forEach(fileItem => {
      if (fileItem.isUploaded) {
        todo.hasAttachment = true;

        if (!todo.files)
          todo.files = [{ name: fileItem.file.name, fileType: fileItem.file.type, size: fileItem.file.size }];
        else
          todo.files.push({ name: fileItem.file.name, fileType: fileItem.file.type, size: fileItem.file.size });
      }
    });

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
