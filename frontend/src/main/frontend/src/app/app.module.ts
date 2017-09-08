import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from "ngx-dropdown";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRotingModule} from "./app-routing.module";
import { MainPageComponent } from './main-page/main-page.component';
import {AuthService} from "./auth/auth.service";
import { OrderFormComponent } from './user/order-form/order-form.component';
import { OrderListComponent } from './user/order-list/order-list.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { UserComponent } from './user/user.component';
import {AuthGuardUserService} from "./auth/auth-guard-user.service";
import {AuthGuardAdminService} from "./auth/auth-guard-admin.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    MainPageComponent,
    OrderFormComponent,
    OrderListComponent,
    UserMenuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRotingModule,
    DropdownModule


  ],
  providers: [AuthService,AuthGuardUserService,AuthGuardAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
