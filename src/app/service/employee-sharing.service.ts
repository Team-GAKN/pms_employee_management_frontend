import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSharingService {
  private employee: any;

  setEmployee(employee: any) {
    this.employee = employee;
  }

  getEmployee() {
    return this.employee;
  }
}
