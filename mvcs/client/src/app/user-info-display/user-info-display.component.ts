import { Component, OnInit } from '@angular/core';
import {User} from "../domain/user";
import {Matches} from "../domain/matches";
import {Blocked} from "../domain/blocked";

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {
  private user: User;
  private matches: Matches;
  private blocked: Blocked;

  constructor() { }

  ngOnInit() {

  }

}
