import { CustomToastService } from './../../../shared/services/custom-toast.service';
import { Todo } from './../../../shared/models/todo.model';
import { TodoService } from './../../../shared/services/todo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    public customToastService: CustomToastService) {
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

  onRemove(formValue) {
    let inbuiltId = this.existingTodo._id;

    this.todoService.removeTodo(inbuiltId).then((result) => {
      if (result._body === "Deleted") {
        this.customToastService.toastMessage("Todo removed!", "");
        this.router.navigate(['/list']);
      }
    });
  }


  onRemoveAttachment(file) {
    let inbuiltId = this.existingTodo._id;
    let fileName = file.savedName;

    this.todoService.removeTodoAttachment(inbuiltId, fileName).then((result) => {
      if (result._body === "Deleted") {
        this.customToastService.toastMessage("Attachment removed!", "");
        this.loadTodoById(inbuiltId);
      }
    });
  }
}
