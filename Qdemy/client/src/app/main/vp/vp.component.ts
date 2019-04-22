import { Component, OnInit } from "@angular/core";
import { Permission } from "src/models/permission.model";
import { HttpService } from "src/services/http.service";

@Component({
  selector: "app-vp",
  templateUrl: "./vp.component.html",
  styleUrls: ["./vp.component.css"]
})
export class VpComponent implements OnInit {
  permissions: any;
  constructor(private httpserv: HttpService) {}

  ngOnInit() {
    this.httpserv.getVPReq().subscribe(res => {
      console.log(res);
      this.permissions = res;
      console.log(this.permissions);
    });
  }

  approveVP(id: string) {
    this.httpserv.approvebyVP(id).subscribe(res => {
      console.log(res);
    });
  }

  rejectVP(id: string) {
    this.httpserv.reject(id).subscribe(res => {
      console.log(res);
    });
  }
}
