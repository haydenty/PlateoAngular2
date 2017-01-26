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
    errorMessage:string;

    constructor(private _plateService: PlateService){
    }
    createPlate():void{
      var plate:IPlate = {
        "_id": 2,
        "plateNumber": "EYEMAC",
        "state": {
            "name": "WISCONSIN",
            "abbreviation": "WI"
        },
        "createdBy": 1,
        "createdDateTime": "2017-01-12T20:08:19.749Z"
    };

      this._plateService.createPlate(plate).subscribe(error => this.errorMessage = <any>error);
    }
    ngOnInit():void{
      this._plateService.getAllPlates().subscribe(plates => this.plates = plates, error => this.errorMessage = <any>error);
  }
}
