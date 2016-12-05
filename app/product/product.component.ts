import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'my-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product: Product;

    private id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit() {
        if (!this.product) {
        // Could use a snapshot here, as long as the parameters do not change.
        // This may happen when a component is re-used.
        // this.id = +this.route.snapshot.params['id'];
        this.product  = new Product();
        this.route
            .params
            .map(params => params['id'])
            .do(id => this.id = +id) //turn it into a number
            .subscribe(id => this.getProduct());
        }
    }

    private getProduct() {
        console.log('=========> Getting the Product Number ' + this.id);

        this.productService.getProduct(this.id)
        .subscribe((product: Product) => this.setEditProduct(product));


        console.log('=========> Done. the Product Number ' + this.id + ' is Subscribed');
    }

    private gotoProducts() {
        let route = ['/products'];
        this.router.navigate(route);
    }

    private setEditProduct(product: Product) {
        if (product) {
            this.product = product;
        } else {
            this.gotoProducts();
        }
    }

}

