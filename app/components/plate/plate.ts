import {IUser} from '../../sharedComponents/register/user';

export interface IPlate {
  _id:number;
  plateNumber:string;
  state:IState;
  createdBy:number;
  createdDateTime:string;
}

export interface IState {
  name:string;
  abbreviation:string;
}
