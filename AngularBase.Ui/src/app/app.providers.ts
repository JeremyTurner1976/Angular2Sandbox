import { ProductsService } from './services/products.service';
import {APP_BASE_HREF} from '@angular/common';

export const APP_PROVIDERS =[
  ProductsService,
  {provide: APP_BASE_HREF, useValue: '/'}
];
