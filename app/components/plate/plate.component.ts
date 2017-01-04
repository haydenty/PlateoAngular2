import { Component, OnInit } from '@angular/core';
import { IComment } from '../../sharedComponents/commentFeed/comment';
import { IUser } from '../../sharedComponents/register/user';

@Component({
  moduleId: module.id,
  selector: 'plate-app',
  templateUrl: 'plate.template.html',
})
export class PlateComponent implements OnInit {
  comments:IComment[] = [];

  addComment(comment:string):void{
      console.log(comment);
      //TODO: service call and update comments array
  };

  ngOnInit():void{
    //TODO:service call with id from route
    this.comments.push({id:1,comment:"test",user:{id:1,firstName:"tom",lastName:"bob",pword:"",vpword:"",email:"",username:"tesetUN"},createdDateTime:"e234"});
  }
}
