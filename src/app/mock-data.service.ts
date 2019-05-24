import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from './interfaces/IProduct';
import { IOrder } from './interfaces/IOrder';
import { ICartItem } from './interfaces/ICartItem';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MockDataService{

  now = moment().format('LLLL');
  mockOrder: IOrder[] = [];
  mockItems: ICartItem[] = [];
  product: IProduct;
  item: ICartItem = {product: this.product , quantity: 1, totalPrice: 200};

  mockProducts: IProduct[] = [
    {id: 1, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
    {id: 2, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
  ]; 
  
  order: IOrder = 
  { companyId: 8, created: this.now, createdBy:"fanny", paymentMethod: "bitcoins", totalPrice: 100, status: "sent",
    orderRows:[{productId: 1, amount: 3}, {productId: 1, amount: 3}]
  };

  getData(): Observable<IProduct[]>{
    return of(this.mockProducts);
  }

  sendOrder(order: IOrder) {
    this.mockOrder.push(order);
  }

  getOrder() {
    return this.mockOrder;
  }

  addToCart(mockItems: ICartItem[]) {
    sessionStorage.setItem("products", JSON.stringify(mockItems));
  }

  pushCartItem(quantity: number, product: IProduct) {
    this.item = {
      product: product,
      quantity: +quantity,
      totalPrice: +quantity*product.price
    };

    this.mockItems.push(this.item);
    this.addToCart(this.mockItems);
  }

  getCartItems() {
    return JSON.parse(sessionStorage.getItem("products"));
  }

  constructor() { }
}
