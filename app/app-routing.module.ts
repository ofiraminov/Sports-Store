import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pageNotFound.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
  ProductListComponent,
  ProductComponent,
  PageNotFoundComponent
];
