import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {User} from "../shared/User.model";
import {UserService} from "../shared/user.service";
import {UserInfo} from "../shared/User-Info.model";


@Injectable()
export class AuthService {

  role = new Subject<String>();
  userInfo: UserInfo;

  constructor(private router: Router, private http: Http,private userService:UserService) {
  }

  signin(username, password) {
    const myHeader = new Headers();
    let body = "myusername=" + username + "&mypassword=" + password;
    myHeader.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('/login', body, {headers: myHeader})
      .subscribe(
        responce => {
          console.log(responce.json());
          const tempRole = responce.json().authorities[0].authority;
          this.userInfo = responce.json().userInfo;

          this.role.next(tempRole);
          localStorage.setItem('role', tempRole);
          localStorage.setItem('id', responce.json().id);
          if (tempRole.valueOf() == 'ROLE_USER') {
            if(responce.json().userInfo){
              this.router.navigate(['user']);
            }else {
              localStorage.setItem('fillInfo','Заповніть будьласка анкету');
              this.router.navigate(['user/menu']);
            }
          } else {
            this.router.navigate(['admin']);
          }
        },
        error => {
          console.log(error.text());
          console.log('problems in login');
        }
      );


  }

  logout() {
    this.role.next();
    localStorage.setItem('role', '');
    localStorage.setItem('id', '');
    localStorage.setItem('fillInfo', '');
    this.http.get('/logout').subscribe(
      response => {
        console.log('logout is successful');
      },
      error => {
        console.log('logout is not successful');
      }
    );

    this.router.navigate(['main']);
  }

  getRole() {
    return this.role.asObservable();
  }

  signup(user: User) {

    this.userService.saveUser(user);

  }

}
