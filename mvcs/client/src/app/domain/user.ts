export class User {
  infoId: number;
  firstName: string;
  lastName: string;
  bio: string;
  photo: string;
  myers: string;
  userId: number;

  constructor(infoId: number, firstName: string, lastName: string,
              bio: string, photo: string, myers: string, userId: number){
    this.infoId = infoId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.photo = photo;
    this.myers = myers;
    this.userId = userId;
  }
}
