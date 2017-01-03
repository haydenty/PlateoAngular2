import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { LoginComponent } from './sharedComponents/login/login.component';
import { RegisterComponent } from './sharedComponents/register/register.component';


@NgModule({
  imports: [
  BrowserModule,
  FormsModule ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
