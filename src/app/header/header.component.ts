import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
    webTitle : string;
    welcomeImage:string;
    welcomeText:String;
  
    constructor(){
      this.webTitle="angular first program";
      this.welcomeImage="assets/images/namaste.png";
      this.welcomeText="WELCOME";
    }
}
