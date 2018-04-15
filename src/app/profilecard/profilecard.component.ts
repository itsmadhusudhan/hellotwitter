import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profilecard",
  templateUrl: "./profilecard.component.html",
  styleUrls: ["./profilecard.component.css"]
})
export class ProfilecardComponent implements OnInit {
  constructor() {}

  @Input() userInfo;

  ngOnInit() {}
}
