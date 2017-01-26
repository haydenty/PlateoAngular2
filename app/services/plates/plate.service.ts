import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPlate } from '../../components/plate/plate';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PlateService {
    private _baseUrl:string = 'http://localhost:3000/';//'http://104.131.125.3:3000/';
    constructor(private _http: Http){}

    getPlate(plateId:number):Observable<IPlate>{
        return this._http.get(this._baseUrl + 'plates/' + plateId).map((response: Response) => <IPlate> response.json())
                                                        .do(data => console.log('All: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };   
    getAllPlates(): Observable<IPlate[]>{   
        return this._http.get(this._baseUrl+ 'plates' ).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('All: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
    searchPlates(state:string,plateNumber:string):Observable<IPlate[]>{
        return this._http.get(this._baseUrl + 'plates/' + state + '/' + plateNumber).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('All: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
   getPlateComments(plateId:number):Observable<Response>{
        return this._http.get(this._baseUrl + 'comments/' + plateId).do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);
    };
    
    //These requests need tokens
    getUsersPlates(userId:number):Observable<IPlate[]>{
        return this._http.get(this._baseUrl + 'api/v1/plates/' + userId).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('All: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
    
    followPlate(plateId:number,userId:number):Observable<Response>{
        return this._http.post(this._baseUrl + 'api/v1/plates/follow/' + plateId + '/' + userId,{}).catch(this.handleError);
    };

    getIsUserFollowingPlate(plateId:number,userId:number):Observable<Response>{
        return this._http.get(this._baseUrl + 'api/v1/plates/follow/' + plateId + '/' + userId).do(data => console.log('All: ' + JSON.stringify(data))).catch(this.handleError);
    };

    addPlateComment(plateId:number,userId:number,comment:string):Observable<Response>{
        return this._http.post(this._baseUrl + 'api/v1/plates/comment',
        {
            plateId: plateId,
            comment : comment,
            createdBy : userId,
            createdDateTime: new Date()
        }).catch(this.handleError);
    };
    
    createPlate(plate:IPlate):Observable<Response>{
        console.log("made it");
        return this._http.post(this._baseUrl + 'plates',
        {
            plate: plate
        } ).catch(this.handleError);
    };

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}