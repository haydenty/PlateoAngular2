import { IUser } from '../register/user';

export interface IComment {
  id: number;
  user: IUser;
  comment: string;
  createdDateTime: string; 
}
