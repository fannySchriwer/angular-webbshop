import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/CartItem';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedCartItems = this.service.getCartItems();
  }
  
  quantityValue = "";
  cartItemsToStorage: CartItem[] = [];
  collectedCartItems: Product[] = [];
  cartItem = new CartItem;

  getInputQuantity(quantity: string, item: Product)  {
    this.quantityValue = quantity;
    this.addQuantity(item);
  }

  addQuantity(product: Product) {
    this.cartItem.id = product.id;
    this.cartItem.quantity = parseInt(this.quantityValue);
  }

  addToStorage(item) {
    
    this.cartItemsToStorage = this.service.getCartItemQuantity();
    let compItem = this.cartItemsToStorage.find(p => p.id == item.id);

      if(compItem == null) {
        this.cartItemsToStorage = [];
        this.cartItemsToStorage.push(this.cartItem);
        console.log(this.cartItemsToStorage);
        this.service.addCartItemToStorage(this.cartItemsToStorage); 
      } else {
        console.log("hello");
      }
  }
   // this.cartItemsToStorage.push(this.cartItem);
  
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

  //create a counter here that counts how many products
  //create a detele button that conects to deletefunction
  



}
