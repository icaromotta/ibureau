import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryFilterComponent } from './components/product-category-filter/product-category-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StockMarketCardComponent } from './components/stock-market-card/stock-market-card.component';
import { ProductsService } from './services/product/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryFilterComponent,
    ProductCardComponent,
    StockMarketCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
