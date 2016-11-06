import { window } from '@angular-cli/ast-tools/node_modules/rxjs/operator/window';
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

  product: Product = new Product();
  products: Product[] = [];
  filter: string = "";
  errorMessage: string = "";

  constructor(private productsService : ProductsService) {  }

  currentDate(){
    var currentDate = new Date();
    return currentDate.getDate() +
      "/" + currentDate.getMonth() +
      "/" + currentDate.getFullYear();
  }

  ngOnInit() {
    //sample data pull
    this.productsService.getProduct(1)
      .subscribe((product: Product) => this.product = product);

     this.productsService.getProducts()
      .subscribe((products: Product[]) =>
        this.products = products);
  }

  save(product: Product) {
    this.productsService.update(product)
      .subscribe((status: boolean) => {
          if (status) {
            this.product = product;
          } else {
              this.errorMessage = 'Unable to save product.';
          }
      });
  }

  orderClicked() : void {
    console.log("Click on Order");
    //show a popout order page
    //detail read only view here, but collapsed
  }

  productRowClicked() : void{
    if ($('.xs-hidden-button').is(':hidden')){
      console.log("Click on Order programmatically, button is visible: " + !$('.xs-hidden-button').is(':hidden'));
      //send an order
    }
  }

  detailClicked(){
    //show a detail/edit view
  }
}
