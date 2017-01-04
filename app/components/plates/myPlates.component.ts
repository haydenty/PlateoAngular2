import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'myPlates-app',
  templateUrl: 'myPlates.template.html',
})
export class MyPlatesComponent implements OnInit {
  plates:any[] = [{propA:1, propB:"Test"}, {propA:4, propB:"Winner"}];
  ngOnInit():void{
    //TODO: service call
  }
}
