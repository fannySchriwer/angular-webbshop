import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../interfaces/CartItem';
import { Product } from '../interfaces/Product';
import { Order } from '../interfaces/Order';

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

  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedProducts = this.service.getProductsFromStorage();
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    var sum = this.getTotalAmount();
  }

  sum: number;

  getTotalAmount() {
    this.sum = this.collectedCartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    return this.sum;
  }

  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}
