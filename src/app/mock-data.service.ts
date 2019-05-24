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
  product: IProduct = {id: 3, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []};
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

  addToCart(quantity: number, product: IProduct) {
    this.item = {
      product: product,
      quantity: +quantity,
      totalPrice: +quantity*product.price
    };
    this.mockItems.push(this.item);
  }

  pushCartItem(quantity: number, product: IProduct) {

    if(this.mockItems === null) {
      this.addToCart(quantity, product);
    } else {
      let foundItem: boolean = false;

      if(this.mockItems !== null) {
        for(let i = 0; i < this.mockItems.length; i++) {
          if(this.mockItems[i].product.id === product.id) {
            this.mockItems[i].quantity = +quantity;
            this.mockItems[i].totalPrice = +quantity*product.price;
            foundItem = true;
          }
        }
        this.mockItems.push(this.item);
      }
      if(foundItem === false) {
        this.addToCart(quantity, product);
      } 
    }
  }

  getCartItems() {
    return this.mockItems;
  }

  constructor() { }
}
