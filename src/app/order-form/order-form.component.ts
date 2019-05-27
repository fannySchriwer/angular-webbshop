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
  collectedCartItems: ICartItem[] = [];
  orderToSend: IOrder[] = [];
  orderRows: IOrderRow[] = [];
  order: IOrder;
  orderRow: IOrderRow;
  sum: number;

  constructor(private service: DataService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
  }

  paymentMethods = ["Paypal", "Bitcoin", "Guld"];

  orderGroup = this.fb.group({
    name: ['', Validators.required],
    paymentMethods: ['Paypal', Validators.required]
  });

  createOrderRow() {
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      this.orderRow =
        {productId: this.collectedCartItems[i].product.id, 
        amount: this.collectedCartItems[i].quantity};
        this.orderRows.push(this.orderRow);
    }
  };

  createOrder() {
   let now = moment().format('LLLL');
   this.createOrderRow();

    this.order = {
      companyId: 8,
      createdBy: this.orderGroup.value.name,
      paymentMethod: this.orderGroup.value.paymentMethods,
      status: null,
      totalPrice: this.sum,
      created: now,
      orderRows: this.orderRows
    };
console.log(this.order);
this.service.sendData(this.order);
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

