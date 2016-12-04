import { Component, OnInit, ViewChild }
  from '@angular/core';
import {Ng2PaginationModule}
  from 'ng2-pagination';
import { ProductsService } from
  './services/products.service';
import { IPagedResponse } from
  '../../viewModels/interfaces';
import { IProduct } from
  '../../models/interfaces';
import { Product } from
  '../../models/objects';

import { DebouncedInputComponent } from
'../../shared/components/debounced-input/debounced-input.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @ViewChild(DebouncedInputComponent) searchComponent: DebouncedInputComponent;
  products: IProduct[] = [];
  orderProduct: IProduct = new Product();

  loading: boolean = true;
  pageSize: number = 10;
  selectedPage: number = 1;
  totalRecords: number = 0;
  filter: string = "";
  errorMessage: string = "";

  productSubscription: any;
  productsSubscription: any;
  constructor(private productsService : ProductsService) {  }

  ngOnInit() {
    this.getPage(this.selectedPage, true); //first load values
  }

  ngOnDestroy() {
    if(this.productSubscription)
      this.productSubscription.unsubscribe();
    if(this.productsSubscription)
      this.productsSubscription.unsubscribe();
  }

  onProductRowDetails(product: IProduct) {
    //route to the product and have that load the details

    //TODO get a Front end data state service like Ember Data
    if(this.orderProduct.productID != product.productID){

      this.productSubscription =
        this.productsService.getProduct(product.productID)
        .subscribe(
          (product: Product) => {
            this.orderProduct = product;
            console.log(
              "LOADED Full Details for Product: " +
              this.orderProduct.productID);
            console.log(this.orderProduct);
          },
          (error: any) => this.errorMessage = error);
    } else {
      console.log("NO-ACTION")
    }
  }

  onProductOrderClosed(ordered: boolean){
    //show a popout order page with save for that product
    //that product must know it's current shopping cart status
    //detail read only view here at top, but collapsed

    if(ordered){
      console.log("New Product- ORDERED " + this.orderProduct.productID);
      //Shopping cart interaction
    } else{
      console.log("NO-ACTION")
     }
  }

  getPage(page: number, firstLoad: boolean = false){
    console.log("getPage(" + page + ", " + firstLoad + ")");
    let skip = (page - 1) * this.pageSize;
    this.loading = firstLoad;

     //Subscribe allows for(successCallback, failureCallback, completedCallback)
     //each item is put through the success or failure as the data arrives
     this.productsService.getProducts(
        skip,
        this.pageSize,
        [
          {
              property: "Name",
              condition:"Contains",
              comparisonValue: this.filter,
              andOr: ""
          }
        ]
       )//TODO enum this up
      .subscribe(
        (response: IPagedResponse<IProduct>) => {
          this.products = response.data as IProduct[];
          this.totalRecords = response.total;
          this.errorMessage = response.error || "";
          this.selectedPage = page;
          this.loading = false;
        },
        (error: any) => this.errorMessage = error);
  }

  onValueChanged(filterValue: string){
    this.filter = filterValue;
    this.getPage(1);
  }

  clear(){
    //NOTE: ViewChild Sample
    this.searchComponent.clear();
    this.getPage(1);
  }
}

