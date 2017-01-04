import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'commentFeed-shared',
  templateUrl: 'commentFeed.template.html',
})
export class CommentFeedComponent {
  @Input() comments: number;
  newComment:string;
  @Output() addCommentNotify: EventEmitter<string> = new EventEmitter<string>();
  
  addComment():void{
    this.addCommentNotify.emit(this.newComment);
    this.newComment = '';
  }
}
