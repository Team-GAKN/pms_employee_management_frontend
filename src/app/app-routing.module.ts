import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./guard/auth.guard";
import {NgModule} from "@angular/core";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'overview', component: EmployeeViewComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes }
