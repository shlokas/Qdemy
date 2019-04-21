import { Component, OnInit } from "@angular/core";
import { Student } from "../../models/student.model";
import { HOD } from "../../models/hod.model";
import { VP } from "../../models/vp.model";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import "rxjs/add/operator/map";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  student: Student;
  hod: HOD;
  vp: VP;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    console.log(loginForm);

    let role = 0;

    // student
    this.student = {
      UID: 201938392,
      email: "dfg",
      pwd: "2345",
      firstname: "abc",
      lastname: "def"
    };

    // hod - role = 1
    // return ({email: 'asdf', pwd: '34rf'});

    // vp - role = 2
    // return ({email: 'hjk', pwd: 'sdfgh'});

    // return this.http
    //   .post("172.16.40.17", {
    //     email: loginForm.value.email,
    //     pwd: loginForm.value.pwd
    //   })
    //   .map(res => {
    //     console.log(res);
    //     return res;
    //   });
  }
}
