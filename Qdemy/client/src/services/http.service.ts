import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRequests(emailid: string) {
    return this.http
      .post("http://127.0.0.1:8080/request/userRequests", { email: emailid })
      .map(data => {
        // console.log(data);
        return data;
      });
  }

  getHODReq(branch: string) {
    return this.http
      .post("http://127.0.0.1:8080/request/HODRequests", { branch: branch })
      .map(data => {
        // console.log(data);
        return data;
      });
  }

  getVPReq() {
    return this.http
      .post("http://127.0.0.1:8080/request/VPRequests", {})
      .map(data => {
        // console.log(data);
        return data;
      });
  }

  approvebyHOD(id) {
    return this.http
      .post("http://127.0.0.1:8080/request/HODVerification", { _id: id })
      .map(data => {
        console.log(data);
        return data;
      });
  }

  approvebyVP(id) {
    return this.http
      .post("http://127.0.0.1:8080/request/VPVerification", { _id: id })
      .map(data => {
        console.log(data);
        return data;
      });
  }

  reject(id) {
    return this.http
      .post("http://127.0.0.1:8080/request/rejectRequest", {
        _id: id,
        reason: ""
      })
      .map(data => {
        console.log(data);
        return data;
      });
  }
}
