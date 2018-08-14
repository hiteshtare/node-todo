import { ErrorsComponent } from '../errors-component/errors.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const errorRoutes: Routes = [
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },
];

export const appRoutingProviders: any[] = [
];

export const errorRouting: ModuleWithProviders = RouterModule.forRoot(errorRoutes, { useHash: true });

