import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {filter, Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {EmployeeCardComponent} from "../employee-card/employee-card.component";
import {TokenService} from "../service/token.service";
import {NavigationEnd, Router} from "@angular/router";
import {EmployeeSharingService} from "../service/employee-sharing.service";
import {EmployeeDataService} from "../service/employee-data.service";

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent implements OnInit {
  bearer = this.tokenService.getAccessToken();
  employees$: Observable<Employee[]>;

  constructor(private tokenService: TokenService, private router: Router,
              private dataSharingService: EmployeeSharingService, private employeeDataService: EmployeeDataService) {
    this.employees$ = of([]);
    this.employees$ = this.employeeDataService.allEmployees$;
  }

  //Funktioniert nicht
  ngOnInit() {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd)
    ).subscribe(()=>{this.employees$ = this.employeeDataService.allEmployees$});
  }

  handleClick(selectedEmployee: Employee) {
    this.dataSharingService.setEmployee(selectedEmployee);
    this.router.navigate(['/details', { state: {selectedEmployee}}]);
  }
}
