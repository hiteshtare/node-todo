import { CustomToastService } from './../../../shared/services/custom-toast.service';
import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditTodoComponent implements OnInit {

  editTodoForm: FormGroup;
  existingTodo: Todo = new Todo();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private todoService: TodoService,
    public customToastService: CustomToastService, public dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((inbuiltId) => {
      if (inbuiltId) {
        this.loadTodoById(inbuiltId);
      }
      else {
        alert("Empty id!");
      }
    });
  }

  loadTodoById(inbuiltId: string) {
    this.todoService.getTodoByInbuiltId(inbuiltId).then((todo: Todo) => {
      if (todo)
        this.existingTodo = todo;
      else
        alert("Empty Object!");
    });
  }

  createForm() {
    this.editTodoForm = this.formBuilder.group({ 'name': ['', Validators.compose([Validators.required])], 'isDone': ['', Validators.compose([Validators.required])] });
  }

  onUpdate(formValue) {
    this.todoService.addOrUpdateTodo(this.existingTodo).then((result) => {
      if (result._body === "Updated") {
        this.customToastService.toastMessage("Todo updated in the list.", "");
        this.router.navigate(['/list']);
      }
    });
  }

  onRemove() {
    let inbuiltId = this.existingTodo._id;

    this.todoService.removeTodo(inbuiltId).then((result) => {
      if (result._body === "Deleted") {
        this.customToastService.toastMessage("Todo removed!", "");
        this.router.navigate(['/list']);
      }
    });
  }

  openDeleteAttachmentDialog(file): void {
    let dialogDeleteAttachmentRef = this.dialog.open(DialogDeleteAttachment, {
      width: '250px',
      data: {
        file: file,
        inbuiltId: this.existingTodo._id
      }
    });

    dialogDeleteAttachmentRef.afterClosed().subscribe(result => {
      this.loadTodoById(this.existingTodo._id);
    });
  }

  openDeleteTodoDialog(formValue): void {
    let dialogDeleteTodoRef = this.dialog.open(DialogDeleteTodo, {
      width: '250px',
      data: {
        inbuiltId: this.existingTodo._id
      }
    });
  }
}

@Component({
  selector: 'dialog-delete-attachement',
  templateUrl: 'dialog-delete-attachement.html',
})
export class DialogDeleteAttachment {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteAttachment>,
    @Inject(MAT_DIALOG_DATA) public data: any, private todoService: TodoService, public customToastService: CustomToastService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    let inbuiltId = this.data.inbuiltId;
    let fileName = this.data.file.savedName;

    this.todoService.removeTodoAttachment(inbuiltId, fileName).then((result) => {
      if (result._body === "Deleted") {
        this.dialogRef.close();
        this.customToastService.toastMessage("Attachment removed!", "");
      }
    });
  }

}

@Component({
  selector: 'dialog-delete-todo',
  templateUrl: 'dialog-delete-todo.html',
})
export class DialogDeleteTodo {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteTodo>,
    @Inject(MAT_DIALOG_DATA) public data: any, private todoService: TodoService, public customToastService: CustomToastService, private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    let inbuiltId = this.data.inbuiltId;

    this.todoService.removeTodo(inbuiltId).then((result) => {
      if (result._body === "Deleted") {
        this.dialogRef.close();
        this.customToastService.toastMessage("Todo removed!", "");
        this.router.navigate(['/list']);
      }
    });
  }

}