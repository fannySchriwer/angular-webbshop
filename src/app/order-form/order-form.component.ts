import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../interfaces/CartItem';
import { Product } from '../interfaces/Product';
import { Order } from '../interfaces/Order';
import * as moment from 'moment';
import { IProduct } from '../interfaces/IProduct';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  sum: number;
  collectedCartItems: CartItem[] = [];
  collectedProducts: Product[] = [];
  orderToSend: Order[] = [];
  order = new Order();
  now = moment().format('LLLL');
  orderRows: [] = [];

  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedProducts = this.service.getProductsFromStorage();
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
  }

 /* orderForm = this.fb.group({
    name: ['name', Validators.required]
  });*/

  createOrder() {
    this.order.id = null;
    this.order.companyId = 11;
    this.order.createdBy = "Fanny";
    this.order.paymentMethod = "Paypal";
    this.order.status = "Sending order";
    this.order.totalPrice = this.sum;
    this.order.created = this.now;
    this.order.orderRows = [
      {
        amount: 1, 
        productId: 2
      }
    ];

    this.orderToSend.push(this.order);
    console.log(this.orderToSend);
  }

  getTotalAmount() {
    this.sum = 0;
    if(this.collectedCartItems !== null) {
      for(let i = 0; i < this.collectedCartItems.length; i++) {
          let amount = this.collectedCartItems[i].totalPrice;
          this.sum += amount;
        }
    }
  }


  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}

