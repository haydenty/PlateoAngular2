import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { RegisterComponent } from './sharedComponents/register/register.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
