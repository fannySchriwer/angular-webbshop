import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ICartItem } from '../interfaces/ICartItem';
import { IProduct } from '../interfaces/IProduct';
import { IOrder } from '../interfaces/IOrder';
import * as moment from 'moment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  orderRows: [] = [];

  constructor(private service: DataService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
  }

  orderGroup = this.fb.group({
    name: ['name', Validators.required],
  });

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
}

