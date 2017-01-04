import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login-shared',
  templateUrl: 'login.template.html'
})
export class LoginComponent  {
  errorMessage:string = '';

  login(username:string, pword:string):void{
    this.errorMessage = username + ' ' + pword;
    //TODO: do service call
  }
}
