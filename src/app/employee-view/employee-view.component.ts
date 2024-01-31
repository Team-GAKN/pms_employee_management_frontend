import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Employee} from "../Employee";
import {EmployeeCardComponent} from "../employee-card/employee-card.component";
import {EmployeeDataService} from "../service/employee-data.service";

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {

  employees$: Observable<Employee[]> = this.employeeDataService.allEmployees$;

  constructor(private employeeDataService: EmployeeDataService) {
  }

}
