import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeCardComponent} from "../employee-card/employee-card.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  constructor() {
  }

}
