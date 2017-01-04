export class User { //FIXME: should this be a class or interface?
constructor(
  public id: number,
  public firstName: string,
  public lastName: string,
  public pword: string,
  public vpword: string,
  public email: string,
  public username: string ) {}
}
