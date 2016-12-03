import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from
  '../../shared/shared.module';
import { SalesPeopleComponent } from
  './sales-people.component';

@NgModule({
  declarations: [
    SalesPeopleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'salesPeople',
        component: SalesPeopleComponent }
    ])
  ]
})
export class SalesPeopleModule { }
