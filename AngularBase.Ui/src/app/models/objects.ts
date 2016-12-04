import { IProduct} from './interfaces'

export class Product implements IProduct {
  //List Product
  productID: number = 0;
  name: string = "";
  productNumber: string = "";
  sellStartDate: Date;
  standardCost: number = 0;
  listPrice: number = 0;
  productThumbnail: string = "";
  productThumbnailFileName: string = "";

  //Full Product
  class: string = "";
  color: string = "";
  daysToManufacture: number = 0;
  productDocument: any = {};
  productLine: string = "";
  productReviews: any[] = [];
  productSubcategory: string = "";
  productSubcategoryID:  number = 0;
  style: string = "";
  productImage: string = "";
  productImageFileName: string = "";
}
