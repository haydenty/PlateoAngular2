import { Component, OnInit } from '@angular/core';
import { PlateService } from '../../services/plates/plate.service';
import { IPlate } from '../plate/plate';

@Component({
  moduleId: module.id,
  selector: 'myPlates-app',
  templateUrl: 'plates.template.html',
})
export class MyPlatesComponent implements OnInit {
    title:string = 'My Plates';
    filterText:string = '';
    plates:IPlate[];
    
    constructor(private _plateService: PlateService){
    }

    ngOnInit():void{
    this.plates = this._plateService.getMyPlates();
  }
}
