import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private router: Router,
              private http: HttpClient) { }

  public getProducts(): Observable<any> {
    const URL = 'http://ibureau.herokuapp.com/products';
    return this.http.get<any>(URL);
  }

  public getMarket(idProduct: any): Observable<any> {
    const URL = 'http://ibureau.herokuapp.com/products/' + idProduct;
    return this.http.get<any>(URL);
  }
}
