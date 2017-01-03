import { User } from '../register/user';

export class Comment {
constructor(
  public id: number,
  public user: User,
  public comment: string,
  public createdDateTime: string ) {}
}
