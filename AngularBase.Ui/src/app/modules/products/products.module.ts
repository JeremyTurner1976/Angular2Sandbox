import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Ng2PaginationModule }
  from 'ng2-pagination';
import { SharedModule } from
  '../../shared/shared.module';
import { ProductsComponent } from
  './products.component';
import { ProductComponent } from
  './product/product.component';
import { ProductGuard } from
  './guards/product-guard.service';
import { ProductsService } from
  './services/products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    SharedModule,
    Ng2PaginationModule,
    RouterModule.forChild([
      { path: 'product/:id',
        canActivate: [ ProductGuard ],
        component: ProductComponent },
      { path: 'products', component: ProductsComponent }
    ])
  ],
  providers: [ ProductGuard, ProductsService ]
  //bootstrap is for only the apps root
})
export class ProductsModule { }
