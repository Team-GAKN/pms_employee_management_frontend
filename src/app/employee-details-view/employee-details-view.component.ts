import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppButtonComponent} from "../app-button/app-button.component";
import {AppInputComponent} from "../app-input/app-input.component";
import {AppNavbarComponent} from "../app-navbar/app-navbar.component";
import {QualificationLabelComponent} from "../qualification-label/qualification-label.component";
import {ButtonVariant} from "../app-button/buttonVariants";

@Component({
  selector: 'app-employee-details-view',
  standalone: true,
    imports: [CommonModule, AppButtonComponent, AppInputComponent, AppNavbarComponent, QualificationLabelComponent],
  templateUrl: './employee-details-view.component.html',
  styleUrl: './employee-details-view.component.css'
})
export class EmployeeDetailsViewComponent {

  protected readonly ButtonVariant = ButtonVariant;
}
