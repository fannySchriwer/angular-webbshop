import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { IOrder } from './interfaces/IOrder';
import { ICartItem } from './interfaces/ICartItem';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  cartCounter = [];
  counter: number;
  cartItem: ICartItem;
  itemsToStorage: ICartItem[] = [];

  constructor(private httpClient: HttpClient) { }

   URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
   orderURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/';
   getOrdersURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=11';

  getData(): Observable<IProduct[]> {    
    return this.httpClient.get<IProduct[]>(this.URL);
  }

  sendData(order: IOrder) {
    return this.httpClient.post(this.orderURL, order);
  }

  getOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(this.getOrdersURL);
  }

  getCartItemsFromStorage() {
    return JSON.parse(sessionStorage.getItem("cartItems"));
  }

  addCartItemsToStorage(itemsToStorage: ICartItem[]) {
    sessionStorage.setItem("cartItems", JSON.stringify(itemsToStorage));
  }

  addToCart(quantity: number, product: IProduct) {
    this.cartItem = {
      product: product,
      quantity: +quantity,
      totalPrice: +quantity*product.price
    };
    $(".alert").removeClass("alert-hide").addClass("alert-secondary");
    this.itemsToStorage.push(this.cartItem);
    this.addCartItemsToStorage(this.itemsToStorage);
  }

  updateCartCount() {
    this.cartCounter = this.getCartItemsFromStorage();
    this.counter = this.cartCounter.length;
    return this.counter;
  }

}
