import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { StudentComponent } from "./main/student/student.component";
import { HodComponent } from "./main/hod/hod.component";
import { VpComponent } from "./main/vp/vp.component";
import { StudDashComponent } from "./main/student/stud-dash/stud-dash.component";
import { NewPermComponent } from "./main/student/new-perm/new-perm.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "main",
    component: MainComponent,
    children: [
      {
        path: "student",
        component: StudentComponent,
        children: [
          { path: "dash", component: StudDashComponent },
          { path: "new_permission", component: NewPermComponent },
          { path: "", redirectTo: "dash", pathMatch: "full" }
        ]
      },
      {
        path: "hod/dash",
        component: HodComponent
      },
      {
        path: "vp/dash",
        component: VpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
