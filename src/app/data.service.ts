import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { Product } from './interfaces/Product';
import { Order } from './interfaces/Order';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private httpClient: HttpClient) { }

   URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  getData(): Observable<IProduct[]> {    
    return this.httpClient.get<IProduct[]>(this.URL);
  }

  //private cartItems: Product[] = [];
  private cartCounter = new BehaviorSubject(0);


  getCartItems() {
    //return this.cartItems;
    return JSON.parse(sessionStorage.getItem("products"));
  }

  addToCart(addedCartItems: Product[]) {
    sessionStorage.setItem("products", JSON.stringify(addedCartItems));
    /*if (this.cartItems.includes(product)) {
      return;
    } 
    this.cartItems.push(product);*/
  }

  updateCartCount(counter: number) {
    this.cartCounter.next(counter);
  }

  /*removeFromCart(product: Product) {
    this.cartItems.splice(this.cartItems.indexOf(product), 1);
  }*/

  private orders: Order[] = [];
  createOrder() {
    
  }

  mapOrder() {

  }
}
