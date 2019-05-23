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
    this.sum = 0;
    
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      for(let i = 0; i < this.collectedProducts.length; i++) {
        let price = this.collectedProducts[i].price;
        let amount = this.collectedCartItems[i].quantity;
        let totalPrice = price*amount;
        this.sum += totalPrice;
      }

    }

  }

  //create an order formgroup with all the engeskaper för IOrder
  //send the form to db and show order-confirm component

}
