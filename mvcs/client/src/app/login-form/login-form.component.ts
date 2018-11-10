import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Router} from "@angular/router";
// import {UserService} from "../services/user.service";
import {User} from "../domain/user";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() loginUser : EventEmitter<User> = new EventEmitter();
  userInfo: User = new User();

  constructor(private router:Router, private service:UserAuthService) { }

  ngOnInit() {
    //this.user.postUserAuth().subscribe()
  }

  newUserClick(){
    this.router.navigate(['/newuser']);
  }

  loginClick(data: AuthUser, valid){
    if(valid){
      if(this.service.checkUserAuth(data)
        .subscribe(userInfo => this.userInfo = userInfo)){
        this.router.navigate(['/dashboard']);
      } else {
        //todo invalid user info
      }

      // if(data.username === 'admin' && data.password === 'admin') {
      //   //this.user.setUserLoggedIn();
      //   this.router.navigate(['/dashboard']);
      // }
    }
  }

}
