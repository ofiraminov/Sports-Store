import { Component, Input } from '@angular/core';

import { Product } from './product.model';

@Component({
    moduleId: module.id,
    selector: 'my-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})
export class ProductComponent {
    @Input() product: Product;
}
