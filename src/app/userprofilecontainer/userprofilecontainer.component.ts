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
    tweets: 61,
    following: 51,
    followers: 21,
    likes: 102,
    lists: 0,
    moments: 0
  };
}
