export interface IProduct {
  //List Product
  productID: number;
  name: string;
  productNumber: string;
  sellStartDate: Date;
  standardCost: number,
  listPrice: number,
  productThumbnail: string;
  productThumbnailFileName: string;

  //Full Product
  class: string;
  color: string;
  daysToManufacture: number;
  productDocument: any;
  productLine: string;
  productReviews: any[];
  productSubcategory: string;
  productSubcategoryID:  number;
  style: string;
  productImage: string;
  productImageFileName: string;
}
