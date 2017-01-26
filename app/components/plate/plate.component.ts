import { Component, OnInit } from '@angular/core';
import { IComment } from '../../sharedComponents/commentFeed/comment';
import { IPlate } from './plate';

@Component({
  moduleId: module.id,
  selector: 'plate-app',
  templateUrl: 'plate.template.html',
})
export class PlateComponent implements OnInit {
  plate:IPlate = {
        "_id": 2,
        "plateNumber": "EYEMAC",
        "state": {
            "name": "WISCONSIN",
            "abbreviation": "WI"
        },
        "createdBy": 3,
        "createdDateTime": "2017-01-12T20:08:19.749Z"
    };
  isFollowing:boolean = false;
  comments:IComment[] = [];

  addComment(comment:IComment):void{
      console.log('In parent',comment);
      //TODO: service call to create in db - should this live here or in shared component as comment service
  };

  follow():void{
    console.log("follow status changed")
    //TODO: service call to say user is unfollowing or following plate x
    this.isFollowing = !this.isFollowing;
  }

  ngOnInit():void{
    //TODO:service call with id from route (get plate, get comments, get following)
    this.comments.push({id:1,comment:"test",user:{_id:1,firstName:"tom",lastName:"bob",pword:"",vpword:"",email:"",username:"tesetUN"},createdDateTime:"e234"});
  }
}
