import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable, of} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Employee} from "../Employee";
import {EmployeeCardComponent} from "../employee-card/employee-card.component";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";
import {EmployeeSharingService} from "../service/employee-sharing.service";

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EmployeeCardComponent],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {
  bearer = this.tokenService.getAccessToken();
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router, private dataSharingService: EmployeeSharingService) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  handleClick(selectedEmployee: Employee) {
    this.dataSharingService.setEmployee(selectedEmployee);
    this.router.navigate(['/details', { state: {selectedEmployee}}]);
  }
}
