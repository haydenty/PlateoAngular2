import {IUser} from '../../sharedComponents/register/user';

export interface IPlate {
  id:number;
  plateNumber:string;
  state:IState;
  user:IUser;
  createdDateTime:string;
//"_id":45,"number":"rpx946","state":{"name":"WISCONSIN","abbreviation":"WI"},"user":{"userId":43,"username":"kodybrand"},"createdDateTime":"2016-10-18T22:33:23.244Z"
}

export interface IState {
  name:string;
  abbreviation:string;
}