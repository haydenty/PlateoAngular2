import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from './comment';

@Component({
  moduleId: module.id,
  selector: 'commentFeed-shared',
  templateUrl: 'commentFeed.template.html',
})
export class CommentFeedComponent {
  @Input() comments: IComment[];
  newComment:string;
  @Output() addCommentNotify: EventEmitter<IComment> = new EventEmitter<IComment>();
  
  addComment():void{
    var comment:IComment = {  id: -1,
                    user: {
                          "_id":1,
                          "firstName":"Bob",
                          "lastName":"Smith",
                          "pword":"Test123",
                          "vpword":"Test123",
                          "email":"bob@test.com",
                          "username":"bsmith"
                      },
                    comment: this.newComment,
                    createdDateTime: new Date().toString()
                  };

    this.comments.push(comment);
    this.newComment = '';
    this.addCommentNotify.emit(comment);//this tells the parent that i was clicked and here was the comment go call your service
  }
}
