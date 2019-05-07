import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private httpClient: HttpClient) { }

   URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  getData(): Observable<IProduct[]> {    
    return this.httpClient.get<IProduct[]>(this.URL);
  }

  private cartItems: Product[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    console.log(product);
  }

  removeFromCart(product: Product) {
    this.cartItems.splice(this.cartItems.indexOf(product), 1);
  }

}
