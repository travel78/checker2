import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../shared/user.service";
import {UserInfo} from "../../shared/User-Info.model";
import {User} from "../../shared/User.model";
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  @ViewChild('f') userInfoForm: NgForm;
  info;
  userInfo: UserInfo = new UserInfo();


  constructor(private userService: UserService, private authService: AuthService) {

  }

  ngOnInit() {
    if (localStorage.getItem('fillInfo')) {

      this.info = localStorage.getItem('fillInfo');
    }
    console.log('menu');
    console.log(this.authService.userInfo);

    if(this.authService.userInfo){

      this.userInfo = this.authService.userInfo;
    }
  }


  save() {
    this.userInfo.firstName = this.userInfoForm.value.firstName;
    this.userInfo.lastName = this.userInfoForm.value.lastName;
    this.userInfo.city = this.userInfoForm.value.city;
    this.userInfo.phoneNumber = this.userInfoForm.value.phoneNumber;
    this.userInfo.sendingInfo = this.userInfoForm.value.sendingInfo;
    this.userService.addUserInfo(this.userInfo);
  }
}
