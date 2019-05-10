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

  getCartItems() {
    return JSON.parse(sessionStorage.getItem("products"));
  }

  getCartItemQuantity() {
    return JSON.parse(sessionStorage.getItem("cartItemsQuantity"));
  }

  addToCart(addedCartItems: Product[]) {
    sessionStorage.setItem("products", JSON.stringify(addedCartItems));
  }

  addCartItemToSTorage(cartItem: CartItem[]) {
    sessionStorage.setItem("cartItemsQuantity", JSON.stringify(cartItem));
  }

  updateCartCount() {
    this.cartCounter = this.getCartItems();
    this.counter = this.cartCounter.length;
    return this.counter;
  }

  private orders: Order[] = [];
  createOrder() {
    
  }

}
