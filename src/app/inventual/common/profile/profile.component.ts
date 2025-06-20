import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

menuSidebarActive:boolean = false;
isProfileEnabled:boolean = false;
hide = true;


constructor() {}

myfunction(){
  if(this.menuSidebarActive == false){
    this.menuSidebarActive = true;
  }
  else {
    this.menuSidebarActive = false;
  }
}

editProfileEnable(){
  if(this.isProfileEnabled == false){
    this.isProfileEnabled = true;
  }
  else {
    this.isProfileEnabled = false;
  }
}

ngOnInit(): void {
}

}
