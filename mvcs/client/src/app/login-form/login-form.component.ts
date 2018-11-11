import {Component, OnInit} from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Router} from "@angular/router";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private service:UserAuthService) {}

  ngOnInit() {}

  newUserClick(){
    this.router.navigate(['/newuser']);
  }

  loginClick(data: AuthUser, valid){
    if(valid){
      if(this.service.checkUserAuth(data)
        .subscribe(userInfo => localStorage.setItem("userid", userInfo + ""))){
          console.log(localStorage.getItem("userid"));
          if(localStorage.getItem("userid") !== undefined ||
            localStorage.getItem("userid") !== null){
            this.router.navigate(['/dashboard']);
          } else {
            //todo Invalid user info
          }
      }
    }
  }

}
