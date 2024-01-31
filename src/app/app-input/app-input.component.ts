import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { InputType } from "./inputType";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent {
  @Input() inputClass: string = '';
  @Input() inputValue: string = '';
  @Input() inputType: InputType = InputType.Text;
  @Input() placeholder: string = 'Example placeholder';
  @Input() isReadOnly: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(): void {
    this.valueChange.emit(this.inputValue);
  }
}
