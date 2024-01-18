import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-qualification-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification-label.component.html',
  styleUrls: ['./qualification-label.component.scss']
})
export class QualificationLabelComponent {
  @Input() labelText: string = '';
  @Input() isHeld: boolean = false;
  @Output() buttonClick = new EventEmitter<boolean>();

  onButtonClick(): void {
    this.buttonClick.emit(this.isHeld);
  }
}
