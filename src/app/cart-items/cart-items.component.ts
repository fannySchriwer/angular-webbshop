import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ICartItem } from '../interfaces/ICartItem';

declare var $: any;

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  collectedCartItems: ICartItem[] = [];
  ifNoItems = true;
  
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    this.checkQuantity();
  }

  checkQuantity() {
    this.collectedCartItems = this.service.getCartItemsFromStorage();
    if(this.collectedCartItems.length > 0) {
      this.ifNoItems = false;
    }
  }

  setAndGetItem() {
    this.service.addCartItemsToStorage(this.service.itemsToStorage);
    this.collectedCartItems = this.service.getCartItemsFromStorage();
  }

  addQuantity(quantity: number, product: ICartItem) {
    this.service.itemsToStorage = this.service.getCartItemsFromStorage();

    for(let i = 0; i < this.service.itemsToStorage.length; i++) {
      if(this.service.itemsToStorage[i].product.id === product.product.id) {
        let newQtn = this.service.itemsToStorage[i].quantity = +quantity +1;
        this.service.itemsToStorage[i].totalPrice = newQtn*product.product.price;
      } 
    }
    this.setAndGetItem();
  } 

  updateQuantity(quantity: number, product: ICartItem) {
    this.service.itemsToStorage = this.service.getCartItemsFromStorage();
    
    for(let i = 0; i < this.service.itemsToStorage.length; i++) {
      if(this.service.itemsToStorage[i].product.id === product.product.id) {
        let newQtn = this.service.itemsToStorage[i].quantity = +quantity;
        this.service.itemsToStorage[i].totalPrice = +newQtn*product.product.price;
      } 
    }
    this.setAndGetItem();
  }

  removeQuantity(quantity: number, product: ICartItem) {
    this.service.itemsToStorage = this.service.getCartItemsFromStorage();

    if(quantity == 1) {
      this.onRemoveItem(product);
    } else {
      for(let i = 0; i < this.service.itemsToStorage.length; i++) { 
        if(this.service.itemsToStorage[i].product.id === product.product.id) { 
          let newQtn = this.service.itemsToStorage[i].quantity = +quantity -1;
          this.service.itemsToStorage[i].totalPrice = +newQtn*product.product.price;
        }
      }
    this.setAndGetItem();
    }
  }
  
  onRemoveItem(product: ICartItem) {
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      if(this.collectedCartItems[i].product.id === product.product.id) {
        this.collectedCartItems.splice(this.collectedCartItems.indexOf(product), 1);
      }
    }
    this.service.addCartItemsToStorage(this.collectedCartItems);
    this.checkQuantity();
  }
}
