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
  now = moment('YYYY-MM-DDTHH-MM-SS');
  orderRows: [] = [];

  constructor(private service: DataService, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.collectedProducts = this.service.getProductsFromStorage();
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
    console.log(this.now);
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
        productId: 2,
        amount: 1, 
      }
    ];

    this.orderToSend.push(this.order);
    console.log(this.orderToSend);
  }

  getTotalAmount() {
    
    for(let i = 0; i < this.collectedCartItems.length; i++) {
     this.sum += this.collectedCartItems[i].totalPrice;
     // let product = products.find(p => p.id === this.collectedCartItems[i].id);
      console.log(this.collectedCartItems[i].totalPrice);
     // this.sum += product.price * this.collectedCartItems[i].quantity;
    }
    //this.sum = this.collectedCartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    console.log(this.sum);
  }

  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}
