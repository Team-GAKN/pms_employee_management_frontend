import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVariant } from './buttonVariants'; // Adjust the import path as needed

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
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
