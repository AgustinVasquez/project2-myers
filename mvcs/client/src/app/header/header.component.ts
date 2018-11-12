import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NgbModal , private userService: UserService) { }

  ngOnInit() {
  }

}
