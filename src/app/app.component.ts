import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeViewComponent} from "./employee-view/employee-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lf10StarterNew';
}
