import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTodoComponent implements OnInit {

  addTodoForm: FormGroup;
  newTodo: Todo;
  public uploader: FileUploader
  uploadedResp = [];
  @ViewChild('inputFileUpload')
  inputFileUpload: any;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService,
    public customToastService: CustomToastService) {
    this.createForm();
  }

  ngOnInit() {
    this.uploader = new FileUploader({ url: this.todoService.todosUploadUrl });
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let data = JSON.parse(response); //success server response
    this.uploadedResp.push(data);
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let error = JSON.parse(response); //error server response
  }

  createForm() {
    this.addTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onAdd(todo: Todo) {
    if (this.uploadedResp.length > 0) {
      todo.hasAttachment = true;

      this.uploadedResp.forEach(resp => {
        if (resp.success) {
          let payload = resp.payload;

          todo.hasAttachment = true;

          if (!todo.files)
            todo.files = [{ name: payload.originalname, savedName: payload.filename, fileType: payload.mimetype, size: payload.size }];
          else
            todo.files.push({ name: payload.originalname, savedName: payload.filename, fileType: payload.mimetype, size: payload.size });
        }
      });
    }
    else {
      todo.hasAttachment = false;
    }

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
    this.uploadedResp = [];
    this.uploader.clearQueue();
    this.inputFileUpload.nativeElement.value = "";
  }
}
