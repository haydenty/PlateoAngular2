import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';

import { routing,
         appRoutingProviders } from './app.routes';

import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,//TODO: are these all needed
    HttpModule,
    ComponentsModule
   ],
  declarations: [
    AppComponent
    ],
  bootstrap:    [ AppComponent ],
  providers: [appRoutingProviders, AUTH_PROVIDERS]
})
export class AppModule { }
