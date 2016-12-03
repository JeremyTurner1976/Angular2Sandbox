import { IPagedResponse} from './interfaces'

export class PagedResponse<T> implements IPagedResponse<T> {
    data: T[] = [];
    total: number = 0;
    error: string = "";
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
