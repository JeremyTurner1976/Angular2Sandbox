import { Component, Input, Output, EventEmitter }
  from '@angular/core';
import { FormsModule }
  from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-debounced-input',
  templateUrl: './debounced-input.component.html',
  styleUrls: ['./debounced-input.component.css']
})

export class DebouncedInputComponent {
  @Input() class: string = "form-control";
  @Input() iconClass: string = "";
  @Input() placeholder: string ="";
  @Input() tooltipLocation: string = "top-left";
  @Input() tooltipText: string = "";
  @Input() throttleTimeInMilliseconds: number= 500;

  value: string = "";
  @Output() valueChanged: EventEmitter<string> =  new EventEmitter<string>();
  @Output() debounceStorage: Subject<string> =  new Subject<string>();

  constructor() {
    this.valueChanged =
      <any>this.debounceStorage.asObservable()
         .debounceTime(this.throttleTimeInMilliseconds)
          .distinctUntilChanged();

  }

  onValueChanged(inputValue: string){
    console.log(inputValue);
    this.debounceStorage.next(inputValue);
  }
}

