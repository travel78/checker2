import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Http} from "@angular/http";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  role: String;
  subscription: Subscription;


  constructor(private auServ: AuthService, private http: Http) {
    this.subscription = this.auServ.getRole().subscribe(role => {
      this.role = role;

    });
  }

  onPush() {

  }

  onLogout() {
    this.auServ.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
