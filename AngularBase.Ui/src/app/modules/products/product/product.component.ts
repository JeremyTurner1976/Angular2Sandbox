import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from
  '../services/products.service';
import { IProduct } from
  '../../../models/interfaces';
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
  productSubscription: any;
  productSaveSubscription: any;
  loading: boolean = true;
  errorMessage: string = "";

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
    //TODO Want to know the page we came in at to redirect there?
    //Singleton Component properties?
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.productSubscription =
      this.productsService.getProduct(this.productId)
        .subscribe(
          (product: IProduct) => {
            this.product = product;

            console.log("LOADED Full Details for Product: " +
              this.product.productID);
            console.log(this.product);
            this.loading = false;
          },
          (error: any) => console.log(error));
  }

  ngOnDestroy() {
    if(this.productSubscription)
      this.productSubscription.unsubscribe();
    if(this.productSaveSubscription)
      this.productSaveSubscription.unsubscribe();
  }

  onBack(){
    this.router.navigate(['products']);
  }

  save(product: IProduct) {
    this.productSaveSubscription =
      this.productsService.update(product)
        .subscribe((status: boolean) => {
          if (status) {
            this.product = product;
          } else {
            this.errorMessage = "Unable to save product.";
          }
        },
        (error: any) => {
          console.log(error);
          this.errorMessage = "Unable to save product.";
        });
  }
}
