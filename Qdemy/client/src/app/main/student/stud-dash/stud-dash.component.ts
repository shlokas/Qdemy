import { Component, OnInit } from "@angular/core";
import { Permission } from "../../../../models/permission.model";
import { HttpService } from "../../../../services/http.service";
import { user } from "src/app/login/login.component";

@Component({
  selector: "app-stud-dash",
  templateUrl: "./stud-dash.component.html",
  styleUrls: ["./stud-dash.component.css"]
})
export class StudDashComponent implements OnInit {
  // permissions: Permission[];
  permissions: any;
  // = [
  //   {
  //     room: ["406", "410A"],
  //     email: "abc@gmail.com",
  //     // issue_date: "12-02-2019",
  //     date_from: "12-02-2019",
  //     date_to: "12-02-2019",
  //     time_from: "12AM",
  //     time_to: "2PM",
  //     student_branch: "TEIT",
  //     student_name: "abc",
  //     reason: "TPO",
  //     status: 0
  //   },
  //   {
  //     room: ["406"],
  //     email: "abc@gmail.com",
  //     // issue_date: "12-02-2019",
  //     date_from: "12-02-2019",
  //     date_to: "12-02-2019",
  //     time_from: "12AM",
  //     time_to: "2PM",
  //     student_branch: "TEIT",
  //     student_name: "abc",
  //     reason: "TPO",
  //     status: 3
  //   },
  //   {
  //     room: ["406"],
  //     email: "abc@gmail.com",
  //     // issue_date: "12-02-2019",
  //     date_from: "12-02-2019",
  //     date_to: "12-02-2019",
  //     time_from: "12AM",
  //     time_to: "2PM",
  //     student_branch: "TEIT",
  //     student_name: "abc",
  //     reason: "TPO",
  //     status: 2
  //   }
  // ];

  constructor(private httpserv: HttpService) {}

  ngOnInit() {
    this.httpserv.getRequests(user.email).subscribe(res => {
      console.log(res);
      this.permissions = res;
    });
  }

  statusSwitch(stat: number): string {
    switch (stat) {
      case 0:
        return "Pending HOD Approval";
      case 1:
        return "Pending Vice Principal's Approval";
      case 2:
        return "Approved";
      case 3:
        return "Rejected";
    }
  }
}
