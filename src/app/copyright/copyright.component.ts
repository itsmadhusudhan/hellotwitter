import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  copyright:any=[
 "About", "Help", "Center", "Terms", "Privacypolicy", "Cookies", "Ads", "info", "Brand", "Blog",
  "Status", "Apps", "Jobs", "Marketing", "Businesses", "Developers"
  ]

  ngOnInit() {
  }

}
