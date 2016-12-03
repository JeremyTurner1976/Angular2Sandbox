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
    SourceBase64Pipe
  ],
  declarations: [
    DebouncedInputComponent,
    LoadingPanelComponent,
    PopoutActionComponent,
    PopoutContentComponent,
    SourceBase64Pipe
  ],
})
export class SharedModule { }
