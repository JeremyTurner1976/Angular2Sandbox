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

    // Color = product.a.x.Color,
    // DaysToManufacture = product.a.x.DaysToManufacture,
    // ProductLine = product.a.x.ProductLine,
    // Class = product.a.x.Class,
    // Style = product.a.x.Style,
    // ProductSubcategoryID = product.a.x.ProductSubcategoryID,
    // ProductModelID = product.a.x.ProductModelID,

}


/*
    thumbnailSource: string = "";

   constructor(
    productID: number,
    name: string,
    productNumber: string ,
    sellStartDate: Date,
    standardCost: number,
    listPrice: number,
    productThumbnail: string,
    productThumbnailFileName: string,
   ){
    this.productID = productID;
    this.name = name;
    this.productNumber = productNumber;
    this.sellStartDate = sellStartDate;
    this.standardCost = standardCost;
    this.listPrice = listPrice;
    this.productThumbnail = productThumbnail;
    this.productThumbnailFileName = productThumbnailFileName;
    this.thumbnailSource = "data:image/gif;base64, ${this.productThumbnail}";
   }
*/
