import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }
  from '@angular/forms';

import { PopoutActionComponent } from './components/popout/popout-action/popout-action.component';
import { PopoutContentComponent } from './components/popout/popout-content/popout-content.component';

import { SourceBase64Pipe } from './pipes/source-base64.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoutActionComponent,
    PopoutContentComponent,
    SourceBase64Pipe
  ],
  declarations: [
    PopoutActionComponent,
    PopoutContentComponent,
    SourceBase64Pipe
  ],
})
export class SharedModule { }
