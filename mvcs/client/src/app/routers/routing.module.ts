import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
// import {LoginFormComponent} from "../login-form/login-form.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
// import {AuthGuard} from "../guards/auth.guard";
import {IntropageComponent} from "../intropage/intropage.component";
import {NewUserComponent} from "../new-user/new-user.component";

const routes: Routes = [
  {path: '', component: IntropageComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'newuser', component: NewUserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
