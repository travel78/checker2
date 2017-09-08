import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http:Http,private authServ: AuthService){}
  ngOnInit(){
    // Sets CSRF protection cookie
    // this.http.get("/onload").forEach(r => {
    // });

    if(localStorage.getItem('role')){
      this.authServ.role.next(localStorage.getItem('role'));
    }
  }


}
