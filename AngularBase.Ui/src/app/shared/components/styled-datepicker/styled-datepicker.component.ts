import * as console from 'console';
import { Component, Input, Output, EventEmitter }
  from '@angular/core';
import { FormsModule }
  from '@angular/forms';

@Component({
  selector: 'app-styled-datepicker',
  templateUrl: './styled-datepicker.component.html',
  styleUrls: ['./styled-datepicker.component.css']
})
export class StyledDatepickerComponent {
  @Input() class: string = "form-control";
  @Input() format: string = "mm/dd/yyyy";
  @Input() label: string ="NoLabel";
  @Input() tooltipText: string = "NoTooltip";

  private inputValue: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() set value(value: string) {
      this.inputValue = new Date(value).toLocaleDateString();
  }

  onValueChanged(value) {
    this.inputValue = new Date(value).toLocaleDateString();
    this.valueChange.emit(this.inputValue);
  }
}
