import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';

import { AppRoutingModule, routableComponents} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    routableComponents
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
