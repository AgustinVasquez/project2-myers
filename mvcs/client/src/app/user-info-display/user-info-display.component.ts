import {Component, Input, OnInit} from '@angular/core';
import {User} from "../domain/user";
import {Matches} from "../domain/matches";
import {Blocked} from "../domain/blocked";
import {RoutingModule} from "../routers/routing.module";
import {UserService} from "../services/user.service";
import {MatchesService} from "../services/matches.service";
import {BlockedService} from "../services/blocked.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {
  @Input() user: User = new User(0, "", "", "", "", "");
  myer_Matches: Matches;
  myer_types: string[];
  matched_Users: User[];
  blocked: Blocked;
  canEdit: boolean = false;
  myer_form: FormGroup;
  private arrayindex: number;

  file : File = null;

  constructor(private router: RoutingModule, private uService: UserService,
              private mService: MatchesService, private bService: BlockedService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.uService.getUser(parseInt(localStorage.getItem("userid")))
      .subscribe(user => {
        console.log(user);
        if(user === null){
          console.log('the user is null');
        } else {
          this.user.photo = user.photo;
          this.user.firstName = user.firstName;
          this.user.lastName = user.lastName;
          this.user.bio = user.bio;
          this.user.myers = user.myers;
          this.updateUserInfo();
        }
      });
    this.mService.getAllMyerTypes()
      .subscribe(myer_types => this.myer_types = myer_types);
  }

  updateUserInfo(){
    this.mService.getAllMatches(this.user.myers)
      .subscribe(matches => this.myer_Matches.MatchArray = matches);
    this.bService.getAllBlocked(this.user.infoId)
      .subscribe(blocked => this.blocked.BlockedArray = blocked);
    this.uService.getAllMatches(this.user.myers)
      .subscribe(matched_Users => this.matched_Users = matched_Users);
    this.filterBlockedUsers();
  }

  filterBlockedUsers(){
    this.matched_Users.forEach(user => {
      if(this.blocked.BlockedArray.includes(user.infoId)){
        this.arrayindex = this.matched_Users.indexOf(user);
        if(this.arrayindex !== -1){
          this.matched_Users.splice(this.arrayindex, 1);
        }
      }
    });
  }

  canEditUserInfoClick(){
    this.canEdit = true;

    this.myer_form = this.fb.group({
      myer_control: this.user.myers
    });
  }

  updateUserInfoClick(userInfo: User){
    this.user.firstName = userInfo.firstName;
    this.user.lastName = userInfo.lastName;
    this.user.bio = userInfo.bio;
    this.user.myers = userInfo.myers;
    this.user.photo = userInfo.photo;

    this.uService.saveUserInfo(this.user).subscribe();
    this.updateUserInfo();

    this.canEdit = false;
  }

  onSelectFile(event) {
    event.preventDefault();

    //Setting this.file equal to the selected file
    this.file = event.target.files[0];

    if(this.file != null){
      //Passing image file to UploadImage
      this.uploadImage(this.file);
    }
  }//ends onSelectFile

  uploadImage(file){

    fetch('https://api.imgur.com/3/image',{
      method: 'POST',
      headers: {
        Authorization: 'Client-ID c95aaa064b20127',
      },
      body: file
    }).then(response =>{
      console.log(response);
      if(response.ok){
        alert('Image Uploaded Succesfully');
      }else{
        alert('Image Failed to upload');
      }

      return response.json();
    }).then(json=>{
      console.log(json);

      let url = json.data.link;
      //alert(url);
      //let test = json.data.deletehash;

      this.user.photo = url;
      window.open(url);
    });

  }//ends uploadImage

}
