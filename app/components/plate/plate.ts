import {IUser} from '../../sharedComponents/register/user';

export interface IPlate {
  _id:number;
  plateNumber:string;
  state:IState;
  user:IUser;
  createdDateTime:string;
}

export interface IState {
  name:string;
  abbreviation:string;
}