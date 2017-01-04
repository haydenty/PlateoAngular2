import { IUser } from '../register/user';

export class IComment {
  id: number;
  user: IUser;
  comment: string;
  createdDateTime: string; 
}
