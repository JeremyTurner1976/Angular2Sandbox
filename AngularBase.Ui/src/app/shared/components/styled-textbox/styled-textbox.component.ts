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

//NOTE Property based sets:
  //[attr.disabled]="isDisabled"
  //[style.visible]="isVisible"
  //[class.IsValid]="isValid"

//For Multiples:
  //[ngStyles]="setStyles()"
  //[ngClass]="setClasses()"

//TODO
//attr.aria-label
//attr.aria-for
//etc..



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
