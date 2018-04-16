import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userprofileinfo',
  templateUrl: './userprofileinfo.component.html',
  styleUrls: ['./userprofileinfo.component.css']
})
export class UserprofileinfoComponent implements OnInit {

  constructor() { }

  @Input() userInfo;

  ngOnInit() {
  }

}
