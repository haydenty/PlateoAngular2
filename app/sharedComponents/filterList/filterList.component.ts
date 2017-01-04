import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'filterList-shared',
  templateUrl: 'filterList.template.html',
})
export class FilterListComponent {
  filterText:string = '';
  @Input()items:any[];
}
