import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popout-content',
  templateUrl: './popout-content.component.html',
  styleUrls: ['./popout-content.component.css']
})
export class PopoutContentComponent implements OnInit, OnChanges {

  @Input() modalId: string;
  @Input() title: string = "New Title";
  @Input() closeActionMessage: string = "Close";
  @Input() primaryActionMessage: string = "Save Changes";

  @Output() actionSelected: EventEmitter<boolean> =  new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  onPrimaryClick(){
    this.actionSelected.emit(true);
  }

  onCloseClick(){
    this.actionSelected.emit(false);
  }
}
