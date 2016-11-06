import { IProduct} from './interfaces'

export class Product implements IProduct {
    productID: number = 0;
    name: string = "";
    productNumber: string = "";
    sellStartDate: Date = new Date(1900,1,1);
    standardCost: number = 0;
    listPrice: number = 0;
    productThumbnail: string = "";
    productThumbnailFileName: string = "";
}
