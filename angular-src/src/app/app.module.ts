import { GlobalService } from './shared/services/global.service';
import { CustomToastService } from './shared/services/custom-toast.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './shared/services/todo.service';
import { appRoutingProviders, routing } from './shared/routes/app.routing';
import { AddTodoComponent } from './modules/todo/add-todo/add-todo.component';
import { ListTodoComponent } from './modules/todo/list-todo/list-todo.component';
import { EditTodoComponent, DialogDeleteAttachment, DialogDeleteTodo } from './modules/todo/edit-todo/edit-todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, MatListModule, MatDialogModule, MatSortModule, MatTooltipModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FileUploadModule } from 'ng2-file-upload';
import { ErrorsModule } from './shared/error/error.module';
import { errorRouting } from './shared/error/errors-routing/errors-routing';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    EditTodoComponent,
    DialogDeleteAttachment, DialogDeleteTodo
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatTooltipModule,
    FileUploadModule,
    ErrorsModule, // ERROR HANDLING
    errorRouting// ERROR HANDLING
  ],
  entryComponents: [DialogDeleteAttachment, DialogDeleteTodo],
  providers: [appRoutingProviders, TodoService, CustomToastService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
