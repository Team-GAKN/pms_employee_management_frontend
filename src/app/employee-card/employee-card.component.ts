import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employeeName: string = 'Employee Name';
  @Input() jobDescription: string = 'Job Description';
  @Output() cardClick = new EventEmitter<void>();

  onCardClick(): void {
    this.cardClick.emit();
  }
}
