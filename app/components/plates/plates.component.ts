import { Component, OnInit } from '@angular/core';
import { PlateService } from '../../services/plates/plate.service';
import { IPlate, IState } from '../plate/plate';
import { Data } from './states';

@Component({
  moduleId: module.id,
  selector: 'plates-app',
  templateUrl: 'plates.template.html'
})
export class PlatesComponent implements OnInit {
    isMyPlates:boolean = false;
    data:Data = new Data();//TODO:is this correct usage?
    title:string = 'Plates';
    filterText:string = '';
    states:IState[] =  this.data.states;
    selectedState:IState = this.states[0];//TODO: add as parameter to pipe filter
    plates:IPlate[];
    errorMessage:string;

    constructor(private _plateService: PlateService){
    }

    createPlate():void{
      var plate:IPlate = {
        "_id": -1,
        "plateNumber": this.filterText,
        "state": this.selectedState,
        "createdBy": 1,//TODO:user auth stuff
        "createdDateTime": new Date().toString()
    };

      this._plateService.createPlate(plate).subscribe(error => this.errorMessage = <any>error);
    }

    ngOnInit():void{
        this._plateService.getAllPlates().subscribe(plates => this.plates = plates, error => this.errorMessage = <any>error);
    }
}
