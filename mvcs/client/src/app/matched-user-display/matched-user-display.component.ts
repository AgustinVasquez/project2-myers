import {Component, Input, OnInit} from '@angular/core';
import {User} from "../domain/user";


@Component({
  selector: 'app-matched-user-display',
  templateUrl: './matched-user-display.component.html',
  styleUrls: ['./matched-user-display.component.css']
})
export class MatchedUserDisplayComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
