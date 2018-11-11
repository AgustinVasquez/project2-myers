import { Component, OnInit } from '@angular/core';
import {User} from "../domain/user";
import {Matches} from "../domain/matches";
import {Blocked} from "../domain/blocked";
import {RoutingModule} from "../routers/routing.module";
import {UserService} from "../services/user.service";
import {MatchesService} from "../services/matches.service";
import {BlockedService} from "../services/blocked.service";

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {
  private user: User;
  private matches: Matches;
  private blocked: Blocked;

  constructor(private router: RoutingModule, private uService: UserService,
              private mService: MatchesService, private bService: BlockedService) { }

  ngOnInit() {
    this.uService.getUser(parseInt(localStorage.getItem('userid')))
      .subscribe(user => this.user = user);

  }

}
