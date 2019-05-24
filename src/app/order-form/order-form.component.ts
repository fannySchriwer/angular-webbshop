import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ICartItem } from '../interfaces/ICartItem';
import { IProduct } from '../interfaces/IProduct';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IOrderRow } from '../interfaces/IOrderRow';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  sum: number;
  collectedCartItems: ICartItem[] = [];
  orderToSend: IOrder[] = [];
  order: IOrder;
  now = moment().format('LLLL');
  orderRows: IOrderRow[] = [];
  orders: IOrderRow;

  constructor(private service: DataService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
  }

  paymentMethods = ["Paypal", "Bitcoin", "Guld"];

  orderGroup = this.fb.group({
    name: ['', Validators.required],
    paymentMethods: ['Paypal', Validators.required],
    orderRows: this.fb.array([this.fb.control('')])
  });

  createOrder() {
    this.order.companyId = 8;
    this.order.createdBy = "Fanny";
    this.order.paymentMethod = "Paypal";
    this.order.status = "Sending order";
    this.order.totalPrice = this.sum;
    this.order.created = this.now;

    for(let i = 0; i < this.collectedCartItems.length; i++) {
      this.orders.amount = this.collectedCartItems[i].quantity;
      this.orders.productId = this.collectedCartItems[i].product.id;

      this.order.orderRows.push(this.orders);
    }
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
}

