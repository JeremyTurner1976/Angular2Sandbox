import {  PipeTransform, Pipe } from '@angular/core';
import { IProduct } from '../../../models/interfaces';

@Pipe({
    name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  // | items: filter"
    transform(value: IProduct[], filter: string): IProduct[] {
      //TODO Make a better sample
      //Replaced with Server Paging - but left in as a sample

      filter = filter ? filter.toLocaleLowerCase() : null;
      return filter ? value.filter((product: IProduct) =>
          product.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
