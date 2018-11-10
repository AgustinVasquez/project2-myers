import { Injectable } from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateUserAuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  newUserAuth(UserLogin: AuthUser): Observable<any>{
    console.log(UserLogin);
    let url = 'http://localhost:8080/userlogin-api/create';

    return this.http.post<any>(url, UserLogin, this.httpOptions);
    // console.log('Got here newUserAuth');
    // console.log(UserLogin);
    // return this.http.put('http://localhost:8080/userlogin-api/create', UserLogin);
  }
}
