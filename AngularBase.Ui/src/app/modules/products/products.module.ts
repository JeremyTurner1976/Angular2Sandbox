import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsFilterPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent }
    ])
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
