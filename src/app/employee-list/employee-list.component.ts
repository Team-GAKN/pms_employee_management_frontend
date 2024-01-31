import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable, of} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Employee} from "../Employee";
import {EmployeeCardComponent} from "../employee-card/employee-card.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EmployeeCardComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE3MDY2OTQzODgsImlhdCI6MTcwNjY5MDc4OCwianRpIjoiOWMwNGExMTYtYzU1Ni00ZjViLWFmMDMtZDRkMjg3M2FiNmZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkYjNjYzFmNC1jOTI5LTRmMjAtOGE3MS05YjRmZjNkNzRmODYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicHJvZHVjdF9vd25lciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.QujHXNIqBJXF7I_PH5Tv7AN4iOm7jE6jPU6Y-E0T-S8LHiDwa_mrN87nuzUPTldgzKdbssoGKLU_N_nsrRkOASK-6R4K4jarV40FXIBrqFqm0795e0j29fTvW1p4WCrCPpPw6EYray4w7Ngfl5IayxS2sdAsvr4PrwJsUteaqk7BzFH8lnaXHTNrWRqIYmKxiO5eVoPEfwl-kBBdDqFLXY4Cxrt6Ct-a9L0NqYHEtqyRvAXXb9qOhftU_cRkeQtpu3FwTyfcjjPlN-EA9aPRJ7efDiXaX05FV9YyVMPH2Dj_BHB0ecqqhq9Vlu7qpmRJ-y66Qd6k2UfZX_NRKvWBzA';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
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
}
