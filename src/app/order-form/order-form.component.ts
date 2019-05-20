import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../interfaces/CartItem';
import { Product } from '../interfaces/Product';
import { Order } from '../interfaces/Order';
import * as moment from 'moment';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  totalAmount: number;
  collectedCartItems: CartItem[] = [];
  collectedProducts: Product[] = [];
  orders: Order[] = [];
  order = new Order();
  now = moment('L');

  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedProducts = this.service.getProductsFromStorage();
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
    console.log(this.now);
  }

  createOrder() {
    this.order.id = null;
    this.order.companyId = 11;
    this.order.createdBy = "";
    this.order.paymentMethod = "Paypal";
    this.order.status = "Sending order";
    this.order.totalPrice = this.sum;
    this.order.created = this.now;
    this.order.orderRows = [ {
      productId: 2,
      amount: 1,  
      }
    ];

  }

  sum: number;

  getTotalAmount() {
    this.sum = this.collectedCartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    return this.sum;
  }

  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}
