import { Component, OnInit } from "@angular/core";
import { Student } from "../../models/student.model";
import { HOD } from "../../models/hod.model";
import { VP } from "../../models/vp.model";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  student: Student;
  hod: HOD;
  vp: VP;
  islogin: boolean = true;
  loginmsg: string = "Register";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  // url: "http://127.0.0.1:8080/user/login";
  login(loginForm: NgForm) {
    console.log(loginForm);

    let level = 0;

    // hod - role = 1
    // return ({email: 'asdf', pwd: '34rf'});

    // vp - role = 2
    // return ({email: 'hjk', pwd: 'sdfgh'});

    this.http
      .post("http://127.0.0.1:8080/user/login", {
        email: loginForm.value.email,
        pwd: loginForm.value.pwd
      })
      .subscribe((data: any) => {
        console.log(data);
        if (data.level == 0) {
          console.log(data.level);
          level = data.level;
          this.router.navigate(["main/student"]);
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
