import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/product/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'ibureau';
  public products: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.lisProducts();
  }

  lisProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}
