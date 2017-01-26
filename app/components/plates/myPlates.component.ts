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
    errorMessage:string;
    
    constructor(private _plateService: PlateService){
    }

    ngOnInit():void{
        this._plateService.getUsersPlates(1).subscribe(plates => this.plates = plates, error => this.errorMessage = <any>error);
  }
}
