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


@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    NavbarComponent,
    HomecontainerComponent,
    ProfilecardComponent,
    YourtrendsComponent,
    NewtweetComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
