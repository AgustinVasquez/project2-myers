import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/userinfo-api/userinfo/${id}`);
  }

  getAllMatches(myer_id: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/userinfo-api/userinfo/${myer_id}`);
  }
}
