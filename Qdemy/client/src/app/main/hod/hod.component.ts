import { Component, OnInit } from "@angular/core";
import { Permission } from "src/models/permission.model";
import { user } from "src/app/login/login.component";
import { HttpService } from "src/services/http.service";

@Component({
  selector: "app-hod",
  templateUrl: "./hod.component.html",
  styleUrls: ["./hod.component.css"]
})
export class HodComponent implements OnInit {
  permissions: any;
  constructor(private httpserv: HttpService) {}

  ngOnInit() {
    this.httpserv.getHODReq(user.branch).subscribe(res => {
      console.log(res);
      this.permissions = res;
    });
  }

  approveHOD(id: string) {
    this.httpserv.approvebyHOD(id).subscribe(res => {
      console.log(res);
    });
  }

  rejectHOD(id: string) {
    this.httpserv.reject(id).subscribe(res => {
      console.log(res);
    });
  }
}
