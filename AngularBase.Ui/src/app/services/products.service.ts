import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import{ IProduct } from '../models/interfaces';

@Injectable()
export class ProductsService {

  private url: string = 'http://localhost:51493/api/v0.0.0/products';

  constructor(
    private http: Http
  ) { }

  getProduct(id) : Observable<IProduct> {
    return this.http.get(this.url + "/" + id)
        .map((resp: Response) => resp.json())
        .catch(this.handleError);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.url)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  update(product: IProduct) {
    return this.http.put(this.url, product)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  handleError(error: any) {
      return Observable.throw(error.json().error || 'Server error');
  }
}
