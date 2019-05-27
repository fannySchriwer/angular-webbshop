import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { IOrder } from './interfaces/IOrder';
import { ICartItem } from './interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  cartCounter = [];
  counter: number;

  constructor(private httpClient: HttpClient) { }

   URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
   orderURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/';

  getData(): Observable<IProduct[]> {    
    return this.httpClient.get<IProduct[]>(this.URL);
  }

  sendData(order: IOrder) {
    return this.httpClient.post(this.orderURL, order);
  }

  getOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(this.orderURL);
    //to see in url api/orders?companyId=11
  }

  getCartItemsFromStorage() {
    return JSON.parse(sessionStorage.getItem("cartItems"));
  }

  addCartItemsToStorage(itemsToStorage: ICartItem[]) {
    sessionStorage.setItem("cartItems", JSON.stringify(itemsToStorage));
  }

  updateCartCount() {
    this.cartCounter = this.getCartItemsFromStorage();
    this.counter = this.cartCounter.length;
    return this.counter;
  }


}
