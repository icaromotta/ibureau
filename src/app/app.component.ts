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
  public idProduct: any = 0;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.lisProducts();
  }

  public lisProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  public atualizaIdProduto(idProduto) {
    this.idProduct = idProduto;
  }
}
