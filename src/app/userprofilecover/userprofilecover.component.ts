import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-userprofilecover',
  templateUrl: './userprofilecover.component.html',
  styleUrls: ['./userprofilecover.component.css']
})
export class UserprofilecoverComponent implements OnInit {

  constructor() { }

  @Input() userInfo;


  
  ngOnInit() {
  }

}
