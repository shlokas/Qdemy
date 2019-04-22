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
}
