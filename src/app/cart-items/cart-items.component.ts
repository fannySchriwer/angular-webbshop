import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/CartItem';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItems();
    this.cartItemsToStorage = this.service.getCartItemFromStorage();
  }
  
  quantityValue = "1";
  cartItemsToStorage: CartItem[] = [];
  collectedCartItems: Product[] = [];
  //cartItem = new CartItem;

 /* getInputQuantity(quantity: string, item: Product)  {
    this.quantityValue = quantity;
    this.addQuantity(item, +quantity);
  }

  addQuantity(product: Product, quantity: number) {
    this.cartItem.id = product.id;
    this.cartItem.quantity = parseInt(this.quantityValue);
    this.addToStorage(this.cartItem, quantity);
  }

  addToStorage(item: CartItem, quantity: number) {

    if(this.cartItemsToStorage == null) {
      this.cartItemsToStorage = [];
      this.cartItemsToStorage.push(this.cartItem);
      this.service.addCartItemToStorage(this.cartItemsToStorage); 
    } else {
      for(let i = 0; i < this.cartItemsToStorage.length; i++) {
        if(this.cartItemsToStorage[i].id === item.id) {
          this.cartItemsToStorage[i].quantity = quantity;
        }
        else {
          this.cartItemsToStorage.push(this.cartItem);
          this.service.addCartItemToStorage(this.cartItemsToStorage);
        }
      }
    }
  }
  
  /*onGetQuantity(item: CartIteam) {
    this.cartItemsToStorage = this.service.getCartItemQuantity();
    if(this.cartItemsToStorage == null) {
      this.cartItemsToStorage = [];
      this.cartItemsToStorage.push(item);
      this.service.addCartItemToSTorage(this.cartItemsToStorage);
    } else {
      let compProduct = this.cartItemsToStorage.find(prod => prod.id == product.id);
        if(compProduct == null) {
          this.cartItemsToStorage.push(product);
          this.service.addToCart(this.cartItemsToStorage);
        }
    }
  }*/

  onRemoveItem(item) {
    this.collectedCartItems.splice(this.collectedCartItems.indexOf(item), 1);
    this.service.addToCart(this.collectedCartItems);
  }

}
