import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) { }

  getAllMatches(myer_id: string): Observable<string[]>{
    return this.http.get<string[]>(`http://localhost:8080/matches-api/matches/${myer_id}`);
  }

  getAllMyerTypes(): Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8080/matches-api/myertypes");
  }
}
