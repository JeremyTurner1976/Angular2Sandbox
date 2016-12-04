import * as console from 'console';
import { Component, Input, Output, EventEmitter }
  from '@angular/core';
import { FormsModule }
  from '@angular/forms';

@Component({
  selector: 'app-styled-textbox',
  templateUrl: './styled-textbox.component.html',
  styleUrls: ['./styled-textbox.component.css']
})


export class StyledTextboxComponent {
  @Input() class: string = "form-control";
  @Input() iconClass: string = "fa fa-comment";
  @Input() label: string ="NoLabel";
  @Input() placeholder: string ="NoPlaceholder";
  @Input() tooltipLocation: string = "top-left";
  @Input() tooltipText: string = "NoTooltip";

  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChanged(value) {
    this.valueChange.emit(value);
  }
}
