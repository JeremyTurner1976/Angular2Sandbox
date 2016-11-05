import { IProduct} from './interfaces'

export class Product implements IProduct {
    productID: number = null;
    name: string = "";
}
