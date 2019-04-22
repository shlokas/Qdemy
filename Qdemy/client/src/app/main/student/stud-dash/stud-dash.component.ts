import { Component, OnInit } from "@angular/core";
import { Permission } from "../../../../models/permission.model";
@Component({
  selector: "app-stud-dash",
  templateUrl: "./stud-dash.component.html",
  styleUrls: ["./stud-dash.component.css"]
})
export class StudDashComponent implements OnInit {
  permissions: Permission[] = [
    {
      room: ["406", "410A"],
      issue_date: "12-02-2019",
      date_from: "12-02-2019",
      date_to: "12-02-2019",
      time_from: "12AM",
      time_to: "2PM",
      student_branch: "TEIT",
      student_name: "abc",
      reason: "TPO",
      status: 0
    },
    {
      room: ["406"],
      issue_date: "12-02-2019",
      date_from: "12-02-2019",
      date_to: "12-02-2019",
      time_from: "12AM",
      time_to: "2PM",
      student_branch: "TEIT",
      student_name: "abc",
      reason: "TPO",
      status: 3
    },
    {
      room: ["406"],
      issue_date: "12-02-2019",
      date_from: "12-02-2019",
      date_to: "12-02-2019",
      time_from: "12AM",
      time_to: "2PM",
      student_branch: "TEIT",
      student_name: "abc",
      reason: "TPO",
      status: 2
    }
  ];

  constructor() {}

  ngOnInit() {}
}
