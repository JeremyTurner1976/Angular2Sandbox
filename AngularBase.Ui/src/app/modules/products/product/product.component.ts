import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from
  '../services/products.service';
import { Product } from
  '../../../models/objects';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  productName : string = "Loading";
  product: Product = new Product();
  productId : number = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.productsService.getProduct(this.productId)
      .subscribe(
        (product: Product) => {
          this.product = product;

          console.log("LOADED Full Details for Product: " +
            this.product.productID);
          console.log(this.product);
        },
        (error: any) => console.log(error));
  }

  onBack(){
    //state change handling
    this.router.navigate(['products']);
  }

}
