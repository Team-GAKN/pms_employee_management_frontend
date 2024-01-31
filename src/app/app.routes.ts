import {Routes} from "@angular/router";
import {AuthGuard} from "./guard/auth.guard";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";
import {EmployeeDetailsViewComponent} from "./employee-details-view/employee-details-view.component";
import {EmployeeAddComponent} from "./employee-add/employee-add.component";

export const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: EmployeeViewComponent, canActivate: [AuthGuard]},
  {path: 'details', component: EmployeeDetailsViewComponent, canActivate: [AuthGuard]},
  {path: 'add', component: EmployeeAddComponent, canActivate: [AuthGuard]},
];
