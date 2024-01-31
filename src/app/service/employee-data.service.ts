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
  allEmployees$: Observable<Employee[]> = this.getAllEmployees();
  allQualifications$: Observable<Qualification[]> = this.getAllQualifications();

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getAllEmployees() {
    this.allEmployees$ = of([]);
    return this.http.get<Employee[]>('http://localhost:8089/employees', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  createEmployee(employee: Employee) {
    this.http.post(`http://localhost:8089/employees`, employee, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
      .subscribe(
        response => {
          console.log('Erfolgreich erstellt:', response);
        },
        error => {
          console.error('Fehler beim Erstellen:', error);
        }
      );
  }

  updateEmployee(id: number | undefined, employee: Employee) {
    this.http.put(`http://localhost:8089/employees/${id}`, employee, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
      .subscribe(
        response => {
          console.log('Erfolgreich erstellt:', response);
        },
        error => {
          console.error('Fehler beim Erstellen:', error);
        }
      );
  }

  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:8089/employees/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
      .subscribe(
        response => {
          console.log('Erfolgreich erstellt:', response);
        },
        error => {
          console.error('Fehler beim Erstellen:', error);
        }
      );
  }

  getAllQualifications(): Observable<Qualification[]> {
    this.allQualifications$ = of([]);
    return this.http.get<Qualification[]>('http://localhost:8089/qualifications', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  createQualification(qualification: Qualification) {
    return this.http.post('http://localhost:8089/qualifications', qualification, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
      .subscribe(
        response => {
          console.log('Erfolgreich erstellt:', response);
        },
        error => {
          console.error('Fehler beim Erstellen:', error);
        }
      );
  }

  updateQualification(id: number, qualification: Qualification) {
    this.http.put(`http://localhost:8089/qualifications/${id}`, qualification, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
      .subscribe(
        response => {
          console.log('Erfolgreich erstellt:', response);
        },
        error => {
          console.error('Fehler beim Erstellen:', error);
        }
      );
  }

}
