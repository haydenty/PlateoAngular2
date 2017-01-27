import { IUser } from '../register/user';

export interface IComment {
  _id: number;
  user: IUser;
  comment: string;
  createdDateTime: string; 
}
