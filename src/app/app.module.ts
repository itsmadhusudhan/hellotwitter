import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { YourtrendsComponent } from './yourtrends/yourtrends.component';
import { NewtweetComponent } from './newtweet/newtweet.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweet/tweet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    NavbarComponent,
    HomecontainerComponent,
    ProfilecardComponent,
    YourtrendsComponent,
    NewtweetComponent,
    CopyrightComponent,
    TweetsComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
