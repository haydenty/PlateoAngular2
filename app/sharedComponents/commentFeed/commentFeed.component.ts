import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from './comment';
import { Auth } from '../../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'commentFeed-shared',
  templateUrl: 'commentFeed.template.html',
})
export class CommentFeedComponent {
  @Input() comments: IComment[];
  newComment:string;
  @Output() addCommentNotify: EventEmitter<IComment> = new EventEmitter<IComment>();
  authService:Auth;

  constructor(private auth: Auth) {
    this.authService = auth;
  }

  addComment():void{
    console.log("user profile", this.authService.userProfile);
    var comment:IComment = {  "_id": -1,
                    user: {
                          "_id": this.authService.userProfile.identities[0].user_id,
                          "firstName": this.authService.userProfile.user_metadata.firstName,
                          "lastName":this.authService.userProfile.user_metadata.lastName,
                          "pword":"",
                          "vpword":"",
                          "email": this.authService.userProfile.email,
                          "username":this.authService.userProfile.user_metadata.username
                      },
                    comment: this.newComment,
                    createdDateTime: new Date().toString()
                  };

    this.comments.push(comment);
    this.newComment = '';
    this.addCommentNotify.emit(comment);//this tells the parent that i was clicked and here was the comment go call your service
  }
}
