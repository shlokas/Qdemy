import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRouting } from "./app.routing";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { StudentComponent } from "./main/student/student.component";
import { HodComponent } from "./main/hod/hod.component";
import { VpComponent } from "./main/vp/vp.component";
import { HttpClientModule } from "@angular/common/http";
import { StudDashComponent } from './main/student/stud-dash/stud-dash.component';
import { NewPermComponent } from './main/student/new-perm/new-perm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    StudentComponent,
    HodComponent,
    VpComponent,
    StudDashComponent,
    NewPermComponent
  ],
  imports: [BrowserModule, AppRouting, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
