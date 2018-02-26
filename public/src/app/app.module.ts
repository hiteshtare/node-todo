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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditTodoComponent } from './modules/todo/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    routing
  ],
  providers: [appRoutingProviders, TodoService, { provide: ErrorHandler, useClass: CustomErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
