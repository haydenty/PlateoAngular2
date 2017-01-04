import { Component, OnInit } from '@angular/core';
import { PlateService } from '../../services/plates/plate.service';
import { IPlate } from '../plate/plate';

@Component({
  moduleId: module.id,
  selector: 'plates-app',
  templateUrl: 'plates.template.html',
})
export class PlatesComponent implements OnInit {
    title:string = 'Plates';
    filterText:string = '';
    plates:IPlate[];
    
    constructor(private _plateService: PlateService){
    }

    ngOnInit():void{
    this.plates = this._plateService.searchPlates();
  }
}
