import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryFilterComponent } from './_shared/product-category-filter/product-category-filter.component';
import { ProductItemCardComponent } from './_shared/product-item-card/product-item-card.component';
import { StockMarketCardComponent } from './_shared/stock-market-card/stock-market-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryFilterComponent,
    ProductItemCardComponent,
    StockMarketCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
