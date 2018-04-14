import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    NavbarComponent,
    HomecontainerComponent,
    ProfilecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
