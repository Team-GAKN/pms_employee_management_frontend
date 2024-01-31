import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppInputComponent} from "../app-input/app-input.component";
import {QualificationLabelComponent} from "../qualification-label/qualification-label.component";
import {AppButtonComponent} from "../app-button/app-button.component";
import {RouterLink} from "@angular/router";
import {EmployeeSharingService} from "../service/employee-sharing.service";
import {Employee} from "../Employee";
import {ButtonVariant} from "../app-button/buttonVariants";
import {first} from "rxjs";

@Component({
  selector: 'app-employee-edit-view',
  standalone: true,
  imports: [CommonModule, AppInputComponent, QualificationLabelComponent, AppButtonComponent, RouterLink],
  templateUrl: './employee-edit-view.component.html',
  styleUrl: './employee-edit-view.component.css'
})
export class EmployeeEditViewComponent {
  protected readonly ButtonVariant = ButtonVariant;
  employee: Employee | undefined;
  constructor(private dataSharingService: EmployeeSharingService) {}

  ngOnInit() {
    this.employee = this.dataSharingService.getEmployee();
  }

  updateEmployeeData(firstname: string, lastname: string, phone: string,
                     postcode: string, city: string, street: string) {
    console.log(firstname);
  }
}
