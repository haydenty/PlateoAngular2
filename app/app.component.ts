import { Component, OnInit } from '@angular/core';
import { PlateService } from './services/plates/plate.service';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.template.html',
  providers: [PlateService]
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  logOut(): void {
    //TODO: service call
  }
  
  ngOnInit():void{
      //TODO: check if user is already logged in, check local storage. this will be done via a service
  }
}
