import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../services/user-auth.service";
import {AuthUser} from "../domain/auth-user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CreateUserAuthService} from "../services/create-user-auth.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private aUser: AuthUser = new AuthUser(0, "", "", "");

  constructor(private router: Router, private service: CreateUserAuthService) {}



  ngOnInit() {
    //document.appendChild();
  }

  registerUserClick(uAuth: AuthUser){
    console.log(uAuth);
    this.aUser.username = uAuth.username;
    this.aUser.password = uAuth.password;
    this.aUser.email = uAuth.email;
    this.service.newUserAuth(this.aUser);
    this.router.navigate(['']);
  }
}
