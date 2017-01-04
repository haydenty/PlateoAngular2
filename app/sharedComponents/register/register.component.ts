import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
  moduleId: module.id,
  selector: 'register-shared',
  templateUrl: 'register.template.html'
})
export class RegisterComponent  {
  user:IUser = {id:-1,firstName:"",lastName:"",email:"",pword:"",vpword:"",username:""};
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
    this.user = {id:-1,firstName:"",lastName:"",email:"",pword:"",vpword:"",username:""};
  }
}
