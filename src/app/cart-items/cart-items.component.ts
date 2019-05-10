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

  collectedCartItems: Product[] = [];
  cartItem = new CartItem;
  cartItemCount: number = 1;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.collectedCartItems = this.service.getCartItems();
  }

  quantityValue = "";

  getInputQuantity(quantity: string, item: Product)  {
    this.quantityValue = quantity;
    this.addQuantity(item);
  }

  addQuantity(product: Product) {
    this.cartItem.id = product.id;
    this.cartItem.quantity = parseInt(this.quantityValue);
    return this.cartItem; 
  }

  onRemoveItem(item) {
    this.collectedCartItems.splice(this.collectedCartItems.indexOf(item), 1);
    this.service.addToCart(this.collectedCartItems);
  }

  removeQuantity() {

  }

  //create a counter here that counts how many products
  //create a detele button that conects to deletefunction
  



}
