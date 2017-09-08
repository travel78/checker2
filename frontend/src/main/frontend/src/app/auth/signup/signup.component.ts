import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../User.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup(username, password) {
    this.authService.signup(new User(username,password));
  }
}
