import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {HttpParams} from "@angular/common/http";
import {User} from "./User.model";
import {UserInfo} from "./User-Info.model";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  saveUser(user: User) {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    this.http.post('/createUser', user, {headers: myHeader}).subscribe(
      response => {
        console.log('response in signup works');
      },
      error => {
        console.log('error');

      }
    );
  }


  addUserInfo(userInfo:UserInfo){
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    let map={
      'userId':localStorage.getItem('id'),
      'userInfo':userInfo
    }

    this.http.post('/addUserInfo', map, {headers: myHeader}).subscribe(
      response => {
        console.log('stored');
        localStorage.setItem('fillInfo', '');
      },
      error => {
        console.log('not stored');

      }
    );
  }

  getUsers() {
    return null;
  }

}
