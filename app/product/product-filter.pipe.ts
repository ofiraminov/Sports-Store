import { Product } from './product.model';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    
    transform(productList: Product[], filterBy: string): Product[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? productList.filter((product: Product) =>
            product.name.toLowerCase().indexOf(filterBy) !== -1) : productList;
    }
}