import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { AppButtonComponent} from "../app-button/app-button.component";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonVariant} from "../app-button/buttonVariants";
import {EmployeeListComponent} from "../employee-list/employee-list.component";

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule, AppNavbarComponent, AppButtonComponent, EmployeeListComponent],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {

  protected readonly AppButtonComponent = AppButtonComponent;
  protected readonly ButtonVariant = ButtonVariant;
}
