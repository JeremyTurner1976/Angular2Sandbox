import { Component, OnInit } from
  '@angular/core';
import { ProductsService } from
  './services/products.service';
import { Product } from
  '../../models/objects';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];
  currentProduct: Product = new Product();
  lastProductAltered: Product = new Product();
  lastProductAlteredDate: Date = new Date(1900,1,1);

  filter: string = "";
  errorMessage: string = "";

  constructor(private productsService : ProductsService) {  }

  ngOnInit() {
     //Subscribe allows for(successCallback, failureCallback, completedCallback)
     //each itemis put through the success or failure as the data arrives
     this.productsService.getProducts()
      .subscribe(
        (products: Product[]) => this.products = products,
        (error: any) => this.errorMessage = error);
  }

  save(product: Product) {
    this.productsService.update(product)
      .subscribe((status: boolean) =>  {
          if (status) {
            this.currentProduct = product;
          } else {
            this.errorMessage = "Unable to save product.";
          }
      });
  }

  onProductRowDetails(product) {
    //route to the product and have that load the details

    //TODO get a Front end db service like Ember Data
    if(this.currentProduct.productID != product.productID){

      this.productsService.getProduct(product.productID)
        .subscribe(
        (product: Product) => {
          this.currentProduct = product;

          console.log("LOADED Full Details for Product: " +
            this.currentProduct.productID);
          console.log(this.currentProduct);
        },
        (error: any) => this.errorMessage = error);
    } else {
      console.log("NO-ACTION")
    }
  }

  onProductOrderClosed(order: boolean){

    //show a popout order page with save for that product
    //that product must know it's current shopping cart status
    //detail read only view here at top, but collapsed

    if(order){
      console.log("New Product- ORDERED " + this.currentProduct.productID);
      this.lastProductAltered = this.currentProduct;
      this.lastProductAlteredDate = new Date();
    } else{
      console.log("NO-ACTION")
     }
  }
}

