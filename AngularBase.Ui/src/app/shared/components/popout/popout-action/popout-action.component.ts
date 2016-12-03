import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-popout-action',
  templateUrl: './popout-action.component.html',
  styleUrls: ['./popout-action.component.css']
})
export class PopoutActionComponent {

  @Input() modalId: string;
  @Input() actionMessage: string;
  @Input() actionClasses: string = "text-primary";
}
