import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

export let user: User;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // export const user: User;
  islogin: boolean = true;
  loginmsg: string = "Register";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  // url: "http://127.0.0.1:8080/user/login";
  login(loginForm: NgForm) {
    console.log(loginForm);

    this.http
      .post("http://127.0.0.1:8080/user/login", {
        email: loginForm.value.email,
        pwd: loginForm.value.pwd
      })
      .subscribe((data: any) => {
        console.log(data);
        user = data;
        // student login
        if (user.level == 0) {
          this.router.navigate(["main/student"]);
        } else if (user.level == 1) {
          this.router.navigate(["/main/hod/dash"]);
        } else {
          this.router.navigate(["/main/vp/dash"]);
        }
      });
  }

  register(regForm: NgForm) {
    this.http
      .post("http://127.0.0.1:8080/user/register", {
        email: regForm.value.regemail,
        first_name: regForm.value.firstname,
        last_name: regForm.value.lastname,
        pwd: regForm.value.regpwd,
        level: 0
      })
      .subscribe((data: any) => {
        console.log(data);
      });

    alert("You have been registered. Please login with your credentials.");
    this.toggle();
    this.router.navigate([""]);
  }

  toggle() {
    this.islogin = !this.islogin;
    if (this.islogin == true) {
      this.loginmsg = "Register";
    }
    if (this.islogin == false) {
      this.loginmsg = "Login";
    }
  }
}
