import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-userprofilecontainer",
  templateUrl: "./userprofilecontainer.component.html",
  styleUrls: ["./userprofilecontainer.component.css"]
})
export class UserprofilecontainerComponent {
  constructor() {}

  userInfo: Object = {
    userFullname: "Madhusudhan R",
    username: "itsmadhusudhan",
    desc:"I'm a Front-End Developer from Bangalore",
    place:"Bangalore, India",
    blog:"medium.com/@itsmadhusudhan",
    joined:"November 2017",
    born:"January 9, 1996",
    tweets: 61,
    following: 51,
    followers: 21,
    likes: 102,
    lists: 0,
    moments: 0
  };
}
