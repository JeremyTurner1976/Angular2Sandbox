import { IProduct} from './interfaces'

export class Product implements IProduct {
  //List Product
  productID: number = 0;
  name: string = "";
  standardCost: number = 0;
  listPrice: number = 0;
  productSubcategoryID:  number = 0;
  productThumbnail: string = "";
  productThumbnailFileName: string = "";
  sellStartDate: Date;

  //Full Product
  productNumber: string = "";
  //class: string = "";
  color: string = "";
  daysToManufacture: number = 0;
  productDocument: any = {};
  productLine: string = "";
  productReviews: any[] = [];
  productSubcategory: string = "";
  style: string = "";
  productImage: string = "";
  productImageFileName: string = "";
}
