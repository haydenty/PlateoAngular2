import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { HomeComponent } from './components/home/home.component';
import { MyPlatesComponent } from './components/plates/myPlates.component';
import { PlatesComponent } from './components/plates/plates.component';
import { PlateFilterPipe } from './components/plates/plateFilter.pipe';
import { PlateComponent } from './components/plate/plate.component';


import { LoginComponent } from './sharedComponents/login/login.component';
import { RegisterComponent } from './sharedComponents/register/register.component';
import { CommentFeedComponent } from './sharedComponents/commentFeed/commentFeed.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plates', component: PlatesComponent },
  { path: 'plates/me', component: MyPlatesComponent },
  { path: 'plates/:id', component: PlateComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  HttpModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    MyPlatesComponent,
    PlatesComponent,
    PlateFilterPipe,
    PlateComponent,
    LoginComponent,
    RegisterComponent,
    CommentFeedComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
