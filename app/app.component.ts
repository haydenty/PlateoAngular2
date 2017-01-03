import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.template.html',
})
export class AppComponent {
  isLoggedIn: boolean = false;
  logOut(): void {
    //TODO: service call
  }
  //TODO: implement OnInit() which will check if user is already logged in, check local storage. this will be done via a service
}
