import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../services/user-auth.service";
import {AuthUser} from "../domain/auth-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private aUser: AuthUser = new AuthUser(0, "", "", "");
  private isCreated: boolean;

  constructor(private router: Router, private service: UserAuthService) {}

  ngOnInit() {
  }

  registerUserClick(uAuth: AuthUser){
    console.log(uAuth);
    this.aUser.username = uAuth.username;
    this.aUser.password = uAuth.password;
    this.aUser.email = uAuth.email;
    this.service.newUserAuth(this.aUser)
      .subscribe(isCreated => this.isCreated = isCreated);

    if(this.isCreated){
      this.router.navigate(['']);
    } else {

    }
  }
}
