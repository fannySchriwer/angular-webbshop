import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/CartItem';
import { Order } from '../interfaces/Order';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  
  constructor(private service: DataService) { }
  
  ngOnInit() {
    this.collectedProducts = this.service.getProductsFromStorage();
    this.collectedCartItems = this.service.getCartItemsFromStorage();
  }
  
  collectedCartItems: CartItem[] = [];
  collectedProducts: Product[] = [];


  onRemoveItem(item) {
    this.collectedProducts.splice(this.collectedProducts.indexOf(item), 1);
    this.service.addProductsToStorage(this.collectedProducts);
  }

}
