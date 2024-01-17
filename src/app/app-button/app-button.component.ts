import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  standalone: true,
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  @Input() buttonText: string = 'Default Text';
  @Input() btnClass: string = 'btn-primary';
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
