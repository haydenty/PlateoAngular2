import { Component } from '@angular/core';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'register-shared',
  templateUrl: 'register.template.html'
})
export class RegisterComponent  {
  user = new User(-1);
  //user = new User(-1,'F','L','P','VP','E','U');
  submitted = false;
  errorMessage:string = '';

  register(){
    //TODO: do service call
    //if response was good
    this.submitted = true;
    //else
    //this.errorMessage = 'error';
  }
  reset(){
    this.user = new User(-1,'','','','','','');
  }
}
