import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../interfaces/IProduct';
import { ICartItem } from '../interfaces/ICartItem';
import { IOrder } from '../interfaces/IOrder';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  collectedCartItems: ICartItem[] = [];
  
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
  }
  
  onRemoveItem(product: ICartItem) {
    console.log(product);
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      if(this.collectedCartItems[i].product.id === product.product.id) {
        this.collectedCartItems.splice(this.collectedCartItems.indexOf(product), 1);
      }
    }
    this.service.addCartItemsToStorage(this.collectedCartItems);
  }
}
