import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";


import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardAdminService implements CanActivate{
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return localStorage.getItem('role')=='ROLE_ADMIN';
  }

}
