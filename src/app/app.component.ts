import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  userLoggedIn=false;
  isUserloggedIn(){
      if (localStorage.getItem('logged-in')=="true") {
          this.userLoggedIn=true;
          return true;
      }
      else {
          this.userLoggedIn=false;
          return false;
      }
  }
}
