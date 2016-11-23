import { Component } from '@angular/core';

import { ProductService } from './../product/product.service';
import { Product } from './../product/product.model';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent {

  errorMessage: string;
  selectedProduct: Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        products => this.products = products,
        error =>  this.errorMessage = <any>error
        );
  }

  ngOnInit() { this.getProducts(); }

  select(product: Product) {
    this.selectedProduct = product;
  }

}
