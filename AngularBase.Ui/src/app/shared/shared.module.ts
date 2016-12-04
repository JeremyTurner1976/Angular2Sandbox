import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }
  from '@angular/forms';

import { DebouncedInputComponent }
  from './components/debounced-input/debounced-input.component';
import { LoadingPanelComponent }
  from './components/loading-panel/loading-panel.component';
import { PopoutActionComponent }
  from './components/popout/popout-action/popout-action.component';
import { PopoutContentComponent }
  from './components/popout/popout-content/popout-content.component';

import { StyledDatepickerComponent }
  from './components/styled-datepicker/styled-datepicker.component';
import { StyledTextboxComponent } from
  './components/styled-textbox/styled-textbox.component';

import { LimitedDisplayPipe } from './pipes/limited-display.pipe';
import { SourceBase64Pipe } from './pipes/source-base64.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DebouncedInputComponent,
    LoadingPanelComponent,
    PopoutActionComponent,
    PopoutContentComponent,
    StyledDatepickerComponent,
    StyledTextboxComponent,
    LimitedDisplayPipe,
    SourceBase64Pipe
  ],
  declarations: [
    DebouncedInputComponent,
    LoadingPanelComponent,
    PopoutActionComponent,
    PopoutContentComponent,
    LimitedDisplayPipe,
    SourceBase64Pipe,
    StyledDatepickerComponent,
    StyledTextboxComponent
  ],
})
export class SharedModule { }
