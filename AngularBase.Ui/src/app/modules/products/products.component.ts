import { window } from
  '@angular-cli/ast-tools/node_modules/rxjs/operator/window';
import { Component, OnInit } from
  '@angular/core';
import { ProductsService } from
  '../../services/products.service';
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
     this.productsService.getProducts()
      .subscribe((products: Product[]) =>
        this.products = products);
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
    //TODO get a Front end db service like Ember Data
    if(this.currentProduct.productID != product.productID){

      this.productsService.getProduct(product.productID)
        .subscribe((product: Product) => {
          this.currentProduct = product;

          console.log("LOADED Full Details for Product: " +
            this.currentProduct.productID);

          console.log(this.currentProduct);
        });
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

  onProductDetailClosed(save: boolean){
    //detail edit view here with save on change only

    if(save){
      console.log("New Product- SAVED " + this.currentProduct.productID);
      this.lastProductAltered = this.currentProduct;
      this.lastProductAlteredDate = new Date();
    }  else{
      console.log("NO-ACTION")
    }
  }
}
