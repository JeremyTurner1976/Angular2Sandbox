import {  PipeTransform, Pipe } from '@angular/core';
import { IProduct } from '../../../models/interfaces';

@Pipe({
    name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

    transform(value: IProduct[], filter: string): IProduct[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
