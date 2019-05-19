import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-stock-market-card',
  templateUrl: './stock-market-card.component.html',
  styleUrls: ['./stock-market-card.component.scss']
})
export class StockMarketCardComponent implements OnInit, OnChanges {

  @Input() idProduct: any;

  public markets: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getMarkets(this.idProduct);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getMarkets(this.idProduct);
  }

  getMarkets(idProduct) {
    this.productService.getMarket(idProduct).subscribe((response) => {
      this.markets = response;
    });
  }
}
