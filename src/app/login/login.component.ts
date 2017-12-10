import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../core/user.model";
import {BusinessService} from "../core/business.service";
import {Utils} from "../core/utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginItem=true;
    registerItem=false;

    registerUser:User={};
    loginUser={
        "username":"",
        "password":""
    };

  constructor(private router:Router,private businessService:BusinessService) {
      if (localStorage.getItem('logged-in')=="true") {
          this.router.navigate(["dashboard"]);
      }
  }

  ngOnInit() {
  }

  login(){
      this.businessService.loginUser(this.loginUser.username,this.loginUser.password).then(data => {
            if (data.success==true){
                localStorage.setItem('logged-in', "true");
                localStorage.setItem('user', data.user.username);
                this.router.navigate(["dashboard"]);
            }
            else {
                console.log("false");
            }
      });

  }

  register () {
      this.businessService.registerUser(this.registerUser).then(data => {
          if (data.success==true){
              this.loginItem=true;
              this.registerItem=false;
          }
          else {
              console.log("false");
          }
      });
  }

  getCours() {
      this.businessService.registerUser(this.registerUser).then(data => {
          if (data.success==true){
              this.loginItem=true;
              this.registerItem=false;
          }
          else {
              console.log("false");
          }
      });
  }

}
