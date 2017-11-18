import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginItem=true;
    registerItem=false;
  constructor(private router:Router) {
      if (localStorage.getItem('logged-in')=="true") {
          this.router.navigate(["dashboard"]);
      }
  }

  ngOnInit() {
  }

  login(){
      localStorage.setItem('logged-in', "true");
      this.router.navigate(["dashboard"]);
  }

}
