import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from './interfaces/IProduct';
import { IOrder } from './interfaces/IOrder';
import { CartItem } from './interfaces/CartItem';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MockDataService{

  now = moment();

  mockProducts: IProduct[] = [
    {id: 1, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
    {id: 1, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
  ]; 

  getData(): Observable<IProduct[]>{
    return of(this.mockProducts);
  }

  mockOrder: IOrder[] = [];
  order: IOrder = 
    {id: null, 
      companyId: 8, 
      created: this.now, 
      createdBy:"fanny",
      paymentMethod: "bitcoins",
      totalPrice: 100,
      status: "sent",
      orderRows:[{productId: 1, amount: 3}]
    };

    sendOrder(order: IOrder) {
      this.mockOrder.push(order);
      return this.mockOrder;
    }

    addToCart(mockProducts: IProduct[]) {
      sessionStorage.setItem("products", JSON.stringify(mockProducts));
    }

    getCartItems() {
      return JSON.parse(sessionStorage.getItem("products"));
    }

    mockItems: CartItem[] = [];
    item: CartItem = {id: 2, quantity: 1, totalPrice: 200};

    /*addItemToCart(item: CartItem) {
     this.mockItems = this.getCartItems();
      if(this.mockItems === null) {
        this.mockItems.push(item);      
      } else {
        for(let i = 0; i < this.mockItems.length; i++) {
          if(this.mockItems[i].id === item.id) {
            this.mockItems[i].quantity = item.quantity;
            return this.mockItems;
          }
        }
      }
    }*/


  constructor() { }
}
