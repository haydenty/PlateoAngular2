import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { AuthGuard }                   from './auth/auth.guard';

import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [ AuthGuard ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);