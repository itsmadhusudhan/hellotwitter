import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // changeActive($event){
  //   const links:any=document.querySelectorAll(".menu__link");
  //   links.forEach(link=> {
  //     link.classList.remove('navbar__item__active')
  //   });
  //   $event.currentTarget.classList.add('navbar__item__active');
  // }


  currentChoice: string = "home";

   setActive(choice: string): void{
       this.currentChoice = choice;
   }

   getActive(choice: string) : string{
       if(this.currentChoice == choice)
            return "navbar__item__active";
       else
            return "not";

   }


  ngOnInit() {
  }

}
