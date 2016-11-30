import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import{ IProduct } from '../../../models/interfaces';

//Note: Services injected into a Module are available throughout
//  They are registered at the root level automatically
//  In order to keep a service non global, only declare in a component

@Injectable()
export class ProductsService {

  //TODO: Environment config
  private url: string = 'http://localhost:51493/api/v0_0/products';

  constructor(
    private http: Http
  ) { }

  getProduct(id) : Observable<IProduct> {
    return this.http.get(this.url + "/" + id)
        .map((resp: Response) => resp.json())
        //.do(data => console.log("Data: " + JSON.stringify(data)))
        .catch(this.handleError);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.url)
      .map((resp: Response) => resp.json())
      //.do(data => console.log("Data: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  update(product: IProduct) {
    return this.http.put(this.url, product)
      .map((resp: Response) => resp.json())
      //.do(data => console.log("Data: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  handleError(error: Response) {
      return Observable.throw(error.json().error || 'Server error');
  }
}
