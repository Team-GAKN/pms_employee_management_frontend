import {Routes} from "@angular/router";
import {AuthGuard} from "./guard/auth.guard";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";

export const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: EmployeeViewComponent, canActivate: [AuthGuard]}
];
