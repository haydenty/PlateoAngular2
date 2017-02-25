import { Component, OnInit } from '@angular/core';
import { PlateService } from '../../services/plates/plate.service';
import { IPlate, IState } from '../plate/plate';
import { Data } from './states';
import { Auth } from '../../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'myPlates-app',
  templateUrl: 'plates.template.html',
})
export class MyPlatesComponent implements OnInit {
    authService:Auth;
    isMyPlates:boolean = true;
    data:Data = new Data();//TODO:is this correct usage?
    title:string = 'My Plates';
    filterText:string = '';
    states:IState[] =  this.data.states;
    selectedState:IState = this.states[0];//TODO: add as parameter to pipe filter
    plates:IPlate[];
    errorMessage:string;
    
    constructor(private _plateService: PlateService, private auth: Auth){
      this.authService = auth;
  }

    ngOnInit():void{
      var userId = this.authService.userProfile.identities[0].user_id;
        this._plateService.getUsersPlates(userId).subscribe(plates => this.plates = plates, error => this.errorMessage = <any>error);
  }
}
