import { Component } from '@angular/core';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'register-shared',
  templateUrl: 'register.template.html'
})
export class RegisterComponent  {
  user = new User(-1,'','','','','','');
  submitted:boolean = false;
  errorMessage:string = '';

  register():void{
    //TODO: do service call
    //if response was good
    this.submitted = true;
    //else
    //this.errorMessage = 'error';
  }
  reset():void{
    this.user = new User(-1,'','','','','','');
  }
}
