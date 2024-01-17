import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVariant } from './buttonVariants';
import { CommonModule } from "@angular/common"; // Adjust the import path as needed

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  @Input() buttonText: string = 'Button';
  @Input() btnClass: ButtonVariant = ButtonVariant.Primary;
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
