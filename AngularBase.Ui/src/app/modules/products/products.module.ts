import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
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
