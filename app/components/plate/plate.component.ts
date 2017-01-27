import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { IComment } from '../../sharedComponents/commentFeed/comment';
import { IPlate } from './plate';
import { PlateService } from '../../services/plates/plate.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'plate-app',
  templateUrl: 'plate.template.html'
})
export class PlateComponent implements OnInit {
   plate:IPlate;
  isFollowing:boolean = false;
  comments:IComment[] = [];
  errorMessage:string;
  resp:any;

  addComment(comment:IComment):void{
      console.log('In parent',comment);
      this._plateService.addPlateComment(comment,this.plate._id).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error);
  };

  follow():void{
    var userId = 1;
    if(!this.isFollowing){
      this.route.params.switchMap((params: Params) => this._plateService.followPlate(+params['id'], userId)).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error); 
    }
     else{
      this.route.params.switchMap((params: Params) => this._plateService.unfollowPlate(+params['id'], userId)).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error); 
    }
    
    this.isFollowing = !this.isFollowing;//TODO: add errorhandling in case service is down don't switch following in UI
  }

  constructor(private _plateService: PlateService, private route: ActivatedRoute){}

  ngOnInit():void{
    this.route.params.switchMap((params: Params) => this._plateService.getPlate(+params['id'])).subscribe(plate => this.plate = plate, error => this.errorMessage = <any>error);
    this.route.params.switchMap((params: Params) => this._plateService.getPlateComments(+params['id'])).subscribe(comments => this.comments = comments, error => this.errorMessage = <any>error);
    var userId = 1;
    this.route.params.switchMap((params: Params) => this._plateService.getIsUserFollowingPlate(+params['id'], userId)).subscribe(resp => this.isFollowing = resp, error => this.errorMessage = <any>error);
  }
}
