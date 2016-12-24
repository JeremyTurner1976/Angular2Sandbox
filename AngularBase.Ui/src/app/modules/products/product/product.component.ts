import { Component, OnInit, Input, keyframes,
  trigger, state, animate, transition, style } from '@angular/core';
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
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('flyListInOut', [
        state('active', style({ height: 'auto', opacity: 1, transform: 'translateX(0)' })),
        state('inactive', style({ height: '0px', opacity: 0, transform: 'translateX(5%)' })),
        transition('active => inactive', animate('200ms ease-in')),
        transition('inactive => active', animate('200ms 200ms ease-out'))
    ]),
    trigger('flyReviewInOut', [
        state('inactive',style({ height: 'auto', opacity: 1, transform: 'translateX(0)' })),
        state('active', style({ height: '0px', opacity: 0, transform: 'translateX(5%)' })),
        transition('inactive => active', animate('200ms ease-in')),
        transition('active => inactive', animate('200ms 200ms ease-out'))
    ]),
  ]
})

export class ProductComponent implements OnInit {
  product: IProduct = new Product();
  productId : number = 0;
  productSubscription: any;
  productSaveSubscription: any;
  loading: boolean = true;
  reviewMessage: string = "";
  errorMessage: string = "";

  //display properties
  documentOpacity: number = 1;
  imageOpacity: number = 1;
  productDocumentsOpacity: number = 1;
  thumbnailOpacity: number = 1;

  multiplesMockId: number = 0;
  reviewListMode: string = 'active';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
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
            //$("a#toTop").click();
            this.loading = false;
          },
          (error: any) => this.errorMessage = error);
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
        (error: any) => this.errorMessage = error);
  }

  addReview(){
    this.reviewListMode = 'inactive';
  }

  onReviewSelected(review){
    this.reviewMessage = review.message;
    this.reviewListMode = 'inactive';
  }

  saveReview(){
    this.multiplesMockId++;
    this.product.productReviews.push({ productReviewID : this.multiplesMockId, message: this.reviewMessage, shortMessage: this.reviewMessage.substring(0,25) + "..." });
    this.reviewMessage = "";
    this.reviewListMode = 'active';
  }

  cancelReview(){
    this.reviewMessage = "";
    this.reviewListMode = 'active';
  }

}
