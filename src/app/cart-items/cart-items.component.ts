import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  collectedCartItems: Product[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.collectedCartItems = this.service.getCartItems();
  }
  
  cartItemsCounter(id: number) {
    let counter = 0;
    for(let i = 0; i < this.collectedCartItems.length; i++) {
      if(this.collectedCartItems[i].id == id) {
         counter ++;
      }
    }
    console.log(counter);
    return counter;
  }


  //create a counter here that counts how many products
  //create a detele button that conects to deletefunction
  



}
