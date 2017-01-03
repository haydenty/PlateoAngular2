import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { HomeComponent } from './components/home/home.component';
import { MyPlatesComponent } from './components/plates/myPlates.component';
import { PlatesComponent } from './components/plates/plates.component';
import { PlateComponent } from './components/plate/plate.component';

import { LoginComponent } from './sharedComponents/login/login.component';
import { RegisterComponent } from './sharedComponents/register/register.component';
import { CommentFeedComponent } from './sharedComponents/commentFeed/commentFeed.component';
import { SearchListComponent } from './sharedComponents/searchList/searchList.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plates', component: PlatesComponent },
  { path: 'plates/me', component: MyPlatesComponent },
  { path: 'plate/:id', component: PlateComponent },
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
    MyPlatesComponent,
    PlatesComponent,
    PlateComponent,
    LoginComponent,
    RegisterComponent,
    CommentFeedComponent,
    SearchListComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
