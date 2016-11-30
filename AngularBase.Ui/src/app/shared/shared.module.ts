import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }
  from '@angular/forms';

import { LoadingPanelComponent }
  from './components/loading-panel/loading-panel.component';
import { PopoutActionComponent }
  from './components/popout/popout-action/popout-action.component';
import { PopoutContentComponent }
  from './components/popout/popout-content/popout-content.component';

import { SourceBase64Pipe } from './pipes/source-base64.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingPanelComponent,
    PopoutActionComponent,
    PopoutContentComponent,
    SourceBase64Pipe
  ],
  declarations: [
    LoadingPanelComponent,
    PopoutActionComponent,
    PopoutContentComponent,
    SourceBase64Pipe
  ],
})
export class SharedModule { }
