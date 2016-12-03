import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { jsonpFactory } from '@angular/http/src/http_module';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import{ IProduct } from '../../../models/interfaces';
import{ IPagedResponse } from '../../../viewModels/interfaces';

//Note: Services injected into a Module are available throughout
//  They are registered at the root level automatically
//  In order to keep a service non global, only declare in a component

@Injectable()
export class ProductsService {

  //TODO: Environment config
  private baseUrl: string = "http://localhost:51493/api/v0_0/";

  constructor(
    private http: Http
  ) { }

  getProduct(id) : Observable<IProduct> {
    return this.http.get(this.baseUrl + "products/" + id)
        .map((resp: Response) => resp.json())
        //.do(data => console.log("Data: " + JSON.stringify(data)))
        .catch(this.handleError);
  }

  getProducts(
      skip: number = 0,
      take: number = 10,
      whereObjects: any[] = [],//TODO object this up
      orderByObjects: any[] = []//TODO object this up
    )
    : Observable<IPagedResponse<IProduct>> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    var predicateObject = {
        skip: skip,
        take: take,
        whereObjects: whereObjects,
        orderByObjects: orderByObjects
    };

    return this.http.post(this.baseUrl + 'pagedProducts', predicateObject)
      .map((resp: Response) => resp.json())
      //.do(data => console.log("Data: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  update(product: IProduct) {
    return this.http.put(this.baseUrl + "products", product)
      .map((resp: Response) => resp.json())
      //.do(data => console.log("Data: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
