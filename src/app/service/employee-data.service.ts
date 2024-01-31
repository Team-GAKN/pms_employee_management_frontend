import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Qualification} from "../Qualification";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  bearer = this.tokenService.getAccessToken();
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient, private tokenService: TokenService) {
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

  get allQualifications(): Observable<Object> {
    return this.http.get('/qualifications', {
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
