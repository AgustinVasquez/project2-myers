import { Injectable } from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateUserAuthService {
  //
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  newUserAuth(UserLogin: AuthUser): Observable<boolean>{
    console.log(UserLogin);
    // let url = 'http://localhost:8080/userlogin-api/userlogin';
    //
    // return this.http.post<boolean>(url, UserLogin, this.httpOptions);
    // console.log('Got here newUserAuth');
    // console.log(UserLogin);
    return this.http.post<boolean>('http://localhost:8080/userlogin-api/userlogin', UserLogin);
  }
}
