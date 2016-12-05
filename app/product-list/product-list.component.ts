import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProductService } from './../product/product.service';
import { Product } from './../product/product.model';

@Component({
    moduleId: module.id,
    selector: 'my-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

  errorMessage: string;
  selectedProduct: Product;
  products: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  ngOnInit() { this.getProducts(); }

  // events:
  select(product: Product) {
    this.selectedProduct = product;
  }

  clearSelection(){
    this.selectedProduct = null;
  }

  add(event: Event){
    console.log('==========> Need to Implement Adding a Product');
  }

}
