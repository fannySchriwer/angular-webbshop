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
    this.sum = 0;
    
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      for(let i = 0; i < this.collectedProducts.length; i++) {
        let price = this.collectedProducts[i].price;
        let amount = this.collectedCartItems[i].quantity;
        let totalPrice = price*amount;
        this.sum += totalPrice;
      }

    }


  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}
}
