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
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE3MDY2OTAyNDgsImlhdCI6MTcwNjY4NjY0OCwianRpIjoiMzgxZGMzOTMtZmIzMi00OWRkLWExOWUtMTlkNTgwMjU4NjdiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI3MDRlM2VlYi02NDk2LTRjMTEtODcxZi04YTNjZTdlNTU3MjciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicHJvZHVjdF9vd25lciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.P7f2BPn3cDTmlFWea2SyJ6HwZA34ojPBZjpRFRnQbIAXBteIHapqWAu2EZnO1eKcFxzG-XvXDX6a2SJb_QoD9YfvTNSWBMC3eay3S6XYc7D_zLrf6mCWN366ZhnVmVqs-J44y_rdARmFAXseRse1Uu4w-m3cYWSWlEW0XYF9JfjPNSxw6q2s_pwOJQOL0unbFZ0VwoiMx4hUOxMlB9z7zfgIbSXWcBm9pDThZ0zCBUfDgMDbKd6Cjc_cffcxsVBvXffCY-egAy1CtdV3ozZwyZ5B58KD9n3WLV1DRaUcypXJ9AuHGtIvH_VLLpmIrKmQdybeVUrAF4myisg3BDGWHA';
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
