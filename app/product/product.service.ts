import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('app/api/products.json')
      .map((response: Response) => <Product[]>response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}