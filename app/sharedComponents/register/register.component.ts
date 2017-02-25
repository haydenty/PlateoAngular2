import { Component } from '@angular/core';
import { IUser } from './user';
import { AuthHttp } from 'angular2-jwt';
import { Auth } from '../../auth/auth.service';


@Component({
  moduleId: module.id,
  selector: 'register-shared',
  templateUrl: 'register.template.html'
})
export class RegisterComponent  {
  user:IUser = {_id:-1,firstName:"",lastName:"",email:"",pword:"",vpword:"",username:""};
  submitted:boolean = false;
  errorMessage:string = '';

constructor(private auth: Auth, private authHttp: AuthHttp) {
    if(auth.userProfile.user_metadata){
      this.user._id = auth.userProfile.identities[0].user_id;
      this.user.firstName = auth.userProfile.user_metadata.firstName;
      this.user.lastName = auth.userProfile.user_metadata.lastName;
      this.user.email = auth.userProfile.email;
      this.user.username = auth.userProfile.user_metadata.username;
    }
  }

  register():void{

 var headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var data: any = JSON.stringify({
      user_metadata: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        username: this.user.username
      }
    });

    this.authHttp
      .patch('https://' + 'haydenty.auth0.com' + '/api/v2/users/' + this.auth.userProfile.user_id, data, {headers: headers})
      .map(response => response.json())
      .subscribe(
        response => {
          //Update profile
          this.auth.userProfile = response;
          localStorage.setItem('profile', JSON.stringify(response));
        },
        error => alert(error.json().message)
      );
    this.submitted = true;

  }

  reset():void{
    this.user = {_id:-1,firstName:"",lastName:"",email:"",pword:"",vpword:"",username:""};//TODO: change email or password via auth
  }
}
