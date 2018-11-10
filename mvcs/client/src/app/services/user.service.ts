import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {HttpClient} from "@angular/common/http";
import {AuthUser} from "../domain/auth-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn
  }
}
