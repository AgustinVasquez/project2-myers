import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {HttpClient} from "@angular/common/http";


/**
 * @Author: Justin Smith
 *  Front end services for the User
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * @author Justin Smith
   * @param id @returns User | null
   */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/userinfo-api/userinfo/${id}`);
  }

  /**
   * @author Justin Smith
   * @param myer_id @returns User[] | null
   */
  getAllMatches(myer_id: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/userinfo-api/usermatches/${myer_id}`);
  }

  /**
   * @author Justin Smith
   * @param user @returns null
   */
  saveUserInfo(user: User): Observable<any>{
    return this.http.put<any>('http://localhost:8080/userinfo-api/userinfo', user);
  }
}
