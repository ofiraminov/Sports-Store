import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { Product } from './product.model';

let productsUrl = 'app/api/products.json';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    console.log('=S=E=R=V=I=C=E==> Getting the Products now');

    let products = this.http.get(productsUrl)
      .map((res: Response) => <Product[]>res.json().data)
      .catch(this.handleError);

    let i = 5;
    i++;


    return products;
  }

  getProduct(id: number): Observable<Product> {
    console.log('=S=E=R=V=I=C=E==> Getting the Product Number ' + id);
    let p = this.getProducts()
      .flatMap(products => products)
      .find(product => product.id === +id)
      .catch(this.handleError);

    console.log('=S=E=R=V=I=C=E==> Returning the Product Number ' + id + " And p is: "+ p);

    return p;
  }




//------------------------------------------------------------------


  addProduct(product: Product) {
    let body = JSON.stringify(Product);
    return <Observable<Product>>this.http
      .post(`${productsUrl}`, body)
      .map(res => res.json().data)
  //      .catch(this.exceptionService.catchBadResponse)
  }

  deleteProduct(product: Product) {
    return <Observable<Product>>this.http
      .delete(`${productsUrl}/${product.id}`)
      .map(res => this.extractData<Product>(res))
  //    .catch(this.exceptionService.catchBadResponse)
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
}