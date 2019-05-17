import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { Product } from './interfaces/Product';
import { Order } from './interfaces/Order';
import { CartItem } from './interfaces/CartItem';

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
  // private cartCounter = new BehaviorSubject(0);
  // currentCounter = this.cartCounter.asObservable();
  cartCounter = [];
  counter: number;

  getProductsFromStorage() {
    return JSON.parse(sessionStorage.getItem("products"));
  }

  getCartItemsFromStorage() {
    return JSON.parse(sessionStorage.getItem("cartItems"));
  }

  addProductsToStorage(addedCartItems: Product[]) {
    sessionStorage.setItem("products", JSON.stringify(addedCartItems));
  }

  addCartItemsToStorage(itemsToStorage: CartItem[]) {
    sessionStorage.setItem("cartItems", JSON.stringify(itemsToStorage));
  }

  updateCartCount() {
    this.cartCounter = this.getProductsFromStorage();
    this.counter = this.cartCounter.length;
    return this.counter;
  }

  private orders: Order[] = [];
  createOrder() {
    
  }

}
