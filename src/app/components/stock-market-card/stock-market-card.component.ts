import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-stock-market-card',
  templateUrl: './stock-market-card.component.html',
  styleUrls: ['./stock-market-card.component.scss']
})
export class StockMarketCardComponent implements OnInit {

  public markets: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getMarkets();
  }

  getMarkets() {
    this.productService.getMarket().subscribe((response) => {
      this.markets = response;
    });
  }
}
