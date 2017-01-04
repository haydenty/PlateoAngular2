import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'plates-app',
  templateUrl: 'plates.template.html',
})
export class PlatesComponent implements OnInit {
    plates:any[] = [{propA:1, propB:"Test"}, {propA:4, propB:"Winner"}];
    ngOnInit():void{
    //TODO: service call
  }
}
