import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPlate } from '../../components/plate/plate';
import { IComment } from '../../sharedComponents/commentFeed/comment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class PlateService {
    private _baseUrl:string = 'http://localhost:3010/';//'http://104.131.125.3:3000/';
    constructor(private _http: Http){}

    getPlate(plateId:number):Observable<IPlate>{
        return this._http.get(this._baseUrl + 'plates/' + plateId).map((response: Response) => <IPlate> response.json()[0])
                                                        .do(data => console.log('Plate: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };   
    getAllPlates(): Observable<IPlate[]>{   
        return this._http.get(this._baseUrl+ 'plates' ).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('Plates: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
    searchPlates(state:string,plateNumber:string):Observable<IPlate[]>{
        return this._http.get(this._baseUrl + 'plates/' + state + '/' + plateNumber).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('Searched Plates: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
   getPlateComments(plateId:number):Observable<IComment[]>{
        return this._http.get(this._baseUrl + 'comments/' + plateId).map((response: Response) => <IComment[]> response.json())
                                                                    .do(data => console.log('Comments: ' + JSON.stringify(data)))
                                                                    .catch(this.handleError);
    };
    
    //These requests need tokens
    getUsersPlates(userId:number):Observable<IPlate[]>{
        return this._http.get(this._baseUrl + 'plates/user/' + userId).map((response: Response) => <IPlate[]> response.json())
                                                        .do(data => console.log('User Plates: ' + JSON.stringify(data)))
                                                        .catch(this.handleError);
    };
    
    followPlate(plateId:number,userId:number):Observable<Response>{
        return this._http.post(this._baseUrl + 'plates/follow/' + plateId + '/' + userId + '/' + 1,{}).catch(this.handleError);
    };
    unfollowPlate(plateId:number,userId:number):Observable<Response>{
        return this._http.post(this._baseUrl + 'plates/follow/' + plateId + '/' + userId + '/' + 0,{}).catch(this.handleError);
    };
    getIsUserFollowingPlate(plateId:number,userId:number):Observable<boolean>{
        return this._http.get(this._baseUrl + 'plates/follow/' + plateId + '/' + userId)
        .map(this.handleFollowing)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    };
    private handleFollowing(resp: Response)
    {
        let result = resp.json();
        console.log('following resp: ' , result);
        if(result.length == 0){//not following
            console.log('not following');
            return false;
        }
        else{//following
            console.log('following');
            return true;
        }
    }

    addPlateComment(comment:IComment, plateId:number):Observable<Response>{
        return this._http.post(this._baseUrl + 'comments',
        {
            plateId: plateId,
            comment : comment
        }).catch(this.handleError);
    };
    
    createPlate(plate:IPlate):Observable<Response>{
        return this._http.post(this._baseUrl + 'plates',
        {
            plate: plate
        }).catch(this.handleError);
    };

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}