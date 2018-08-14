import { EditTodoComponent } from './../../modules/todo/edit-todo/edit-todo.component';
import { ListTodoComponent } from './../../modules/todo/list-todo/list-todo.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './../../app.component';
import { AddTodoComponent } from '../../modules/todo/add-todo/add-todo.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' }, // default
    { path: 'list', component: ListTodoComponent },
    { path: 'add', component: AddTodoComponent },
    { path: 'edit/:id', component: EditTodoComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
