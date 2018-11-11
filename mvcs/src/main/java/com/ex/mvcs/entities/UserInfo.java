package com.ex.mvcs.entities;
import javax.persistence.*;


@Entity
@Table(name="USER_INFO")
public class UserInfo {

  @Id
  @Column(name="INFO_ID")
  private int infoId;

  @Column(name="FIRST_NAME")
  private String firstName;

  @Column(name="LAST_NAME")
  private String lastName;

  @Column(name="BIO")
  private String bio;

  @Column(name="PHOTO")
  private String photo;

  @Column(name="MYERS")
  private String myers;

  @OneToOne(fetch = FetchType.LAZY)
  @MapsId
  private UserLogin userId;

  public int getInfoId() {
    return infoId;
  }

  public void setInfoId(int infoId) {
    this.infoId = infoId;
  }


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }


  public String getBio() {
    return bio;
  }

  public void setBio(String bio) {
    this.bio = bio;
  }


  public String getPhoto() {
    return photo;
  }

  public void setPhoto(String photo) {
    this.photo = photo;
  }


  public String getMyers() {
    return myers;
  }

  public void setMyers(String myers) {
    this.myers = myers;
  }

  public UserLogin getUserId() {
    return userId;
  }

  public void setUserId(UserLogin userId) {
    this.userId = userId;
  }

  @Override
  public String toString() {
    return "UserInfo{" +
            "infoId=" + infoId +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", bio='" + bio + '\'' +
            ", photo='" + photo + '\'' +
            ", myers='" + myers + '\'' +
            ", userId=" + userId +
            '}';
  }
}
