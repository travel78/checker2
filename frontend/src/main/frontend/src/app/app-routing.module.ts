import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {OrderListComponent} from "./user/order-list/order-list.component";
import {OrderFormComponent} from "./user/order-form/order-form.component";
import {UserMenuComponent} from "./user/user-menu/user-menu.component";
import {UserComponent} from "./user/user.component";
import {AuthGuardUserService} from "./auth/auth-guard-user.service";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'user', component: UserComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: OrderListComponent},
    {path: 'form', component: OrderFormComponent},
    {path: 'menu', component: UserMenuComponent},

  ]
  },
  {path: 'admin', component: AdminComponent  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRotingModule {
}
