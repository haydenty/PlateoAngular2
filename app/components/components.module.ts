import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { SharedComponentsModule } from '../sharedComponents/sharedComponents.module';

import { Auth } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { MyPlatesComponent } from './plates/myPlates.component';
import { PlatesComponent } from './plates/plates.component';
import { PlateFilterPipe } from './plates/plateFilter.pipe';
import { PlateComponent } from './plate/plate.component';

const appRoutes: Routes = [
{ path: 'plates', component: PlatesComponent },
{ path: 'plates/me', component: MyPlatesComponent, canActivate: [AuthGuard] },
{ path: 'plates/:id', component: PlateComponent }
];

@NgModule({
imports: [
        RouterModule.forChild(appRoutes),
        FormsModule,
        HttpModule,
        BrowserModule,//TODO: are these all needed
        SharedComponentsModule
        ],
    exports: [],
    declarations: [
        HomeComponent, 
        MyPlatesComponent,
        PlatesComponent,
        PlateFilterPipe,
        PlateComponent],
    providers: [Auth],
})
export class ComponentsModule{}