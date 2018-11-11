import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlockedService {

  constructor(private http: HttpClient) { }

  getAllBlocked(blocked_id: number): Observable<number[]>{
    return this.http.get<number[]>(`http://localhost:8080/blocked-api/blocked/?id=${blocked_id}`)
  }
}
