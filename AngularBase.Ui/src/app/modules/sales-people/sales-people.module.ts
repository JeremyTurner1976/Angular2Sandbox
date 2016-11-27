import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from
  '../../shared/shared.module';
import { SalesPeopleComponent } from
  './sales-people.component';
import { SalesPeopleGuard } from
  './guards/sales-people-guard.service';

@NgModule({
  declarations: [
    SalesPeopleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'salesPeople',
        canActivate: [ SalesPeopleGuard ],
        component: SalesPeopleComponent }
    ])
  ],
  providers: [ SalesPeopleGuard ]
})
export class SalesPeopleModule { }
