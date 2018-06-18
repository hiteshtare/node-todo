import { CustomToastService } from './shared/services/custom-toast.service';
import { CustomErrorHandlerService } from './shared/services/custom-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './shared/services/todo.service';
import { appRoutingProviders, routing } from './shared/routes/app.routing';
import { AddTodoComponent } from './modules/todo/add-todo/add-todo.component';
import { ListTodoComponent } from './modules/todo/list-todo/list-todo.component';
import { EditTodoComponent } from './modules/todo/edit-todo/edit-todo.component';

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
import { MatPaginatorModule, MatListModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    EditTodoComponent,
    FileSelectDirective
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
    MatListModule
  ],
  providers: [appRoutingProviders, TodoService, CustomToastService, { provide: ErrorHandler, useClass: CustomErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
