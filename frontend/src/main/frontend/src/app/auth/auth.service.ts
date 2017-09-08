import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {User} from "./User.model";


@Injectable()
export class AuthService {

  role = new Subject<String>();
  user;

  constructor(private router: Router, private http: Http) {
  }

  signin(username, password) {
    const myHeader = new Headers();
    let body = "myusername=" + username + "&mypassword=" + password;
    myHeader.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('/login', body, {headers: myHeader})
      .subscribe(
        responce => {
          this.user = responce.json().username;
          const tempRole = responce.json().authorities[0].authority;

            this.role.next(tempRole);
            localStorage.setItem('role', tempRole);
          if (tempRole.valueOf() == 'ROLE_USER') {
            console.log('user');
            this.router.navigate(['main']);
          } else {
            console.log('admin');
            this.router.navigate(['main']);
          }

        },
        error => {
          console.log(error.text());
        }
      );
  }

  logout() {
    this.role.next();
    localStorage.setItem('role', '');
    this.router.navigate(['main']);
    this.http.get('/logout').subscribe(
      response =>{
        console.log('logout is successful');
      },
      error =>{
        console.log('logout is not successful');
      }
    );

  }

  getRole() {
    return this.role.asObservable();
  }

  signup(user:User) {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json' );

    this.http.post('/createUser', user, {headers: myHeader}).subscribe(
      response => {
        console.log('response works');
      },
      error => {
        console.log('error');

      }
    );
  }

}
