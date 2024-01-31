import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNavbarComponent} from "../app-navbar/app-navbar.component";
import {AppButtonComponent} from "../app-button/app-button.component";
import {ButtonVariant} from "../app-button/buttonVariants";
import {AppInputComponent} from "../app-input/app-input.component";
import {QualificationLabelComponent} from "../qualification-label/qualification-label.component";
import {Employee} from "../Employee";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [CommonModule, AppNavbarComponent, AppButtonComponent, AppInputComponent, QualificationLabelComponent, FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  protected readonly ButtonVariant = ButtonVariant;

  employee: Employee | undefined;

  updateData(firstname: string, lastname: string, phone: string, postcode: string, city: string, street: string) {
    this.employee = new Employee(undefined ,firstname, lastname, phone, postcode, city, street);
  }


}
