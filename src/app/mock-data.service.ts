import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from './interfaces/IProduct';
import { IOrder } from './interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class MockDataService{

  mockProducts: IProduct[] = [
    {id: 1, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
    {id: 1, name: "pulp fiction", description: "this is awesome", price: 35, imageUrl: "this url", year: 2001, added: "sometime this year", productCategory: []},
  ]; 

  getData(): IProduct[]{
    return this.mockProducts;
  }

  mockOrder: IOrder[] = [];
  order: IOrder = 
    {id: null, 
      companyId: 8, 
      created: "2019-04-08T00:00:00", 
      createdBy:"fanny",
      paymentMethod: "bitcoins",
      totalPrice: 100,
      status: 0,
      orderRows:[{productId: 1, amount: 3}]
    };

    sendOrder(order: IOrder) {
      this.mockOrder.push(order);
    }

  constructor() { }
}
