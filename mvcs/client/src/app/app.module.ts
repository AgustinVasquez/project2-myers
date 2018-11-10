import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RoutingModule} from "./routers/routing.module";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {UserService} from "./services/user.service";
import {AuthGuard} from "./guards/auth.guard";
import { IntropageComponent } from './intropage/intropage.component';
import { IntroContentComponent } from './intro-content/intro-content.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import {UserAuthService} from "./services/user-auth.service";
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import {CreateUserAuthService} from "./services/create-user-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    IntropageComponent,
    IntroContentComponent,
    NewUserComponent,
    ConfirmEqualValidatorDirective,
    UserInfoDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [UserService, UserAuthService, CreateUserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
