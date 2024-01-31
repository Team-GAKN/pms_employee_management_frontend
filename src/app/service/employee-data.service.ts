import { Injectable } from '@angular/core';
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Qualification} from "../Qualification";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  bearer: any = this.tokenService.getAccessToken();
  allEmployees$: Observable<Employee[]> = this.setAllEmployees();
  allQualifications$: Observable<Qualification[]> = this.setAllQualifications();

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  setAllEmployees() {
    console.log(this.bearer);
    this.allEmployees$ = of([]);
    return this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  createEmployee(employee: Employee) {
    this.http.post('/employees', employee, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });

  }

  updateEmployee(employee: Employee) {
    this.http.put('/employee', employee, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  setAllQualifications(): Observable<Qualification[]> {
    this.allQualifications$ = of([]);
    return this.http.get<Qualification[]>('/qualifications', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  createQualification(qualification: Qualification) {
    this.http.post('/qualifications', qualification, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  updateQualification(qualification: Qualification) {
    this.http.post('/qualifications', qualification, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
