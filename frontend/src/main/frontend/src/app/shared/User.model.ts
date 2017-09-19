import {UserInfo} from "./User-Info.model";



export class User {
  id: number;
  username: string;
  password: string;
  userInfo: UserInfo;
  role;
  accountNonExpired;
  accountNonLocked;
  credentialsNonExpired;
  enabled;
  authorities;


    constructor( username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  static fromJSON(json: any): User {
    let object = Object.create(User.prototype);
    Object.assign(object, json);
    return object;
  }

}
