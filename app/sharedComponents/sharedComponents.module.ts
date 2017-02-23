import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import { Auth } from '../auth/auth.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentFeedComponent } from './commentFeed/commentFeed.component';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes),
        FormsModule,//TODO: are these all needed
        HttpModule,
        BrowserModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        CommentFeedComponent
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        CommentFeedComponent
    ],
    providers: [Auth],
})
export class SharedComponentsModule { }