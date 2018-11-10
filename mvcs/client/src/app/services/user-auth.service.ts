import { Injectable } from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  checkUserAuth(UserLogin: AuthUser): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8080/userlogin-api/auth', UserLogin);
  }

}
