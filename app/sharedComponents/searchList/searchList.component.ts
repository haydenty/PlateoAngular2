import { Component } from '@angular/core';
import { Comment } from './comment';

@Component({
  moduleId: module.id,
  selector: 'searchList-shared',
  templateUrl: 'searchList.template.html',
})
export class SearchListComponent  {
  filterText:string = '';
  items:any[] = [{propA:1, propB:"Test"}, {propA:4, propB:"Winner"}];
  //TODO: takes input of list of any, implement on onInit maybe?
}
