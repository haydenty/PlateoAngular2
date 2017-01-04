import { Component, OnInit } from '@angular/core';
import { Comment } from '../../sharedComponents/commentFeed/comment';
import { User } from '../../sharedComponents/register/user';

@Component({
  moduleId: module.id,
  selector: 'plate-app',
  templateUrl: 'plate.template.html',
})
export class PlateComponent implements OnInit {
  comments:Comment[] = [];

  addComment(comment:string):void{
      console.log(comment);
      //TODO: service call and update comments array
  };

  ngOnInit():void{
    //TODO:service call with id from route
    this.comments.push(new Comment(1,new User(1,'f','e','d','l','a','b'),'adf','datea'));
  }
}
