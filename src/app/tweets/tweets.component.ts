import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"]
})
export class TweetsComponent implements OnInit {
  constructor() {}

  tweetData: any[] = [
    {
      retweet:{
        status:false,
        users:[
          {
            username:"",
            userFullname:""
          }
        ]
      },
      liked:{
        status:true,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      },
      imgUrl: "../../assets/images/madhu.jpg",
      userFullname: "Madhusudhan",
      username: "itsmadhusudhan",
      tweetContent: "Hello world, This is just a sample tweet for testing the tweet component. it seems it's just working fine as expected #angular #javascript #typescript",
      replyCount:2,
      retweetCount: 2,
      likeCount: 50,
      time: "2h"
    },
    {
      retweet:{
        status:true,
        users:[
          {
            username:"itssomeone",
            userFullname:"Someone"
          },
          {
            username:"itssomeone",
            userFullname:"Someoneelse"
          }
        ]
      },
      liked:{
        status:false,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      },
      imgUrl:"../../assets/images/madhu.jpg",
      userFullname:"Madhusudhan",
      username:"itsmadhusudhan",
      tweetContent:`retweet example tweet
                    need to be work everywhere`,
      replyCount:8,      
      retweetCount:2,
      likeCount:3,
      time:"3h"
    },
    {
      retweet:{
        status:true,
        users:[
          {
            username:"itssomeone",
            userFullname:"Someone"
          }
        ]
      },
      liked:{
        status:false,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      },
      imgUrl:"../../assets/images/madhu.jpg",
      userFullname:"Madhusudhan",
      username:"itsmadhusudhan",
      tweetContent:`retweet example tweet
                    need to be work everywhere`,
      replyCount:8,      
      retweetCount:2,
      likeCount:3,
      time:"3h"
    },
    {
      retweet:{
        status:true,
        users:[
          {
            username:"itssomeone",
            userFullname:"Someone"
          }
        ]
      },
      liked:{
        status:false,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      },
      imgUrl:"../../assets/images/madhu.jpg",
      userFullname:"Madhusudhan",
      username:"itsmadhusudhan",
      tweetContent: `Hello world, This is just a sample tweet for testing the tweet component. it seems it's just working fine as expected #angular #javascript #typescript`,
      replyCount:8,      
      retweetCount:2,
      likeCount:3,
      time:"3h"
    },
    {
      retweet:{
        status:true,
        users:[
          {
            username:"itssomeone",
            userFullname:"Someone"
          }
        ]
      },
      liked:{
        status:false,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      },
      imgUrl:"../../assets/images/madhu.jpg",
      userFullname:"Madhusudhan",
      username:"itsmadhusudhan",
      tweetContent: `Hello world, This is just a sample tweet for testing the tweet component. it seems it's just working fine as expected #angular #javascript #typescript`,
      replyCount:8,      
      retweetCount:2,
      likeCount:3,
      time:"3h"
    },
    {
      imgUrl:"../../assets/images/madhu.jpg",
      userFullname:"Madhusudhan",
      username:"itsmadhusudhan",
      tweetContent:`retweet example tweet
                    need to be work everywhere`,
      replyCount:8,      
      retweetCount:25,
      likeCount:30,
      time:"5h",
      retweet:{
        status:false,
        users:[
          {
            username:"itssomeone",
            userFullname:"Someone"
          }
        ]
      },
      liked:{
        status:false,
        users:[
          {
            username:"itsme",
            userFullname:"myself"
          }
        ]
      }      
    }
  ];

  ngOnInit() {}
}
