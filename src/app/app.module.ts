import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomelayoutComponent } from "./homelayout/homelayout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomecontainerComponent } from "./homecontainer/homecontainer.component";
import { ProfilecardComponent } from "./profilecard/profilecard.component";
import { YourtrendsComponent } from "./yourtrends/yourtrends.component";
import { NewtweetComponent } from "./newtweet/newtweet.component";
import { CopyrightComponent } from "./copyright/copyright.component";
import { TweetsComponent } from "./tweets/tweets.component";
import { TweetComponent } from "./tweet/tweet.component";
import { UserprofilelayoutComponent } from "./userprofilelayout/userprofilelayout.component";
import { MomentsComponent } from './moments/moments.component';
import { UserprofilecontainerComponent } from './userprofilecontainer/userprofilecontainer.component';
import { UserprofilecoverComponent } from './userprofilecover/userprofilecover.component';

//Routes
const appRoutes: Routes = [
  { path: "", component: HomelayoutComponent, pathMatch: 'full' },
  {path:"moments", component:MomentsComponent},
  {path:"notifications", component:MomentsComponent},  
  { path: "itsmadhusudhan", component: UserprofilelayoutComponent },
  { path: "**", component: UserprofilelayoutComponent }
];

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
    TweetComponent,
    UserprofilelayoutComponent,
    MomentsComponent,
    UserprofilecontainerComponent,
    UserprofilecoverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
