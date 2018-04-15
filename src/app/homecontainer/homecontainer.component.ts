import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecontainer',
  templateUrl: './homecontainer.component.html',
  styleUrls: ['./homecontainer.component.css']
})
export class HomecontainerComponent implements OnInit {

  constructor() { }

  userInfo:Object={
    userFullname:"Madhusudhan R",
    username:"itsmadhusudhan",
    tweets:61,
    following:51,
    followers:21,
    likes:102,
    lists:0,
    moments:0
  }


  ngOnInit() {
  }

}
