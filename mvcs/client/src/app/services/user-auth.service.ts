import { Injectable } from '@angular/core';
import {AuthUser} from "../domain/auth-user";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../domain/user";


/**
 * @Author: Justin Smith
 *  Front end services for the UserAuth
 */
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  /**
   * @Author: Justin Smith
   * @param UserLogin @returns user_id | null
   */
  checkUserAuth(UserLogin: AuthUser): Observable<number>{
    return this.http.post<number>('http://localhost:8080/userlogin-api/auth', UserLogin);
  }

  /**
   * @Author: Justin Smith
   * @param UserLogin @returns true: created, false: exists
   */
  newUserAuth(UserLogin: AuthUser): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8080/userlogin-api/userlogin', UserLogin);
  }
}
