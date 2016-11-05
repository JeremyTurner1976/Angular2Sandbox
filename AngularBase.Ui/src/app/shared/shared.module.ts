import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopoutComponent } from './components/popout/popout.component';
import { ToasterComponent } from './components/toaster/toaster.component';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    PopoutComponent,
    ToasterComponent
  ],
  declarations: [
    PopoutComponent,
    ToasterComponent
  ],
})
export class SharedModule { }
