import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IComment } from '../../sharedComponents/commentFeed/comment';
import { IPlate } from './plate';
import { PlateService } from '../../services/plates/plate.service';
import 'rxjs/add/operator/switchMap';

import { Auth } from '../../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'plate-app',
  templateUrl: 'plate.template.html'
})
export class PlateComponent implements OnInit {
  authService: Auth;
  plate: IPlate;
  isFollowing: boolean = false;
  comments: IComment[] = [];
  errorMessage: string;
  resp: any;

  addComment(comment: IComment): void {
    console.log('In parent', comment);
    this._plateService.addPlateComment(comment, this.plate._id).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error);
  };

  follow(): void {
    var userId = this.authService.userProfile.identities[0].user_id;;
    if (!this.isFollowing) {
      this.route.params.switchMap((params: Params) => this._plateService.followPlate(+params['id'], userId)).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error);
    }
    else {
      this.route.params.switchMap((params: Params) => this._plateService.unfollowPlate(+params['id'], userId)).subscribe(resp => this.resp = resp, error => this.errorMessage = <any>error);
    }

    this.isFollowing = !this.isFollowing;//TODO: add errorhandling in case service is down don't switch following in UI
  }

  constructor(private _plateService: PlateService, private route: ActivatedRoute, private auth: Auth) {
    this.authService = auth;
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this._plateService.getPlate(+params['id'])).subscribe(plate => this.plate = plate, error => this.errorMessage = <any>error);
    this.route.params.switchMap((params: Params) => this._plateService.getPlateComments(+params['id'])).subscribe(comments => this.comments = comments, error => this.errorMessage = <any>error);
    if (this.authService.authenticated()) {
      var userId = this.authService.userProfile.identities[0].user_id;
      this.route.params.switchMap((params: Params) => this._plateService.getIsUserFollowingPlate(+params['id'], userId)).subscribe(resp => this.isFollowing = resp, error => this.errorMessage = <any>error);

    }
  }
}
