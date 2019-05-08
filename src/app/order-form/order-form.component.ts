import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //create an order formgroup with all the engeskaper för IOrder
  //collect counter for amount, total price and the product id from cart-items component
  //send the form to db and show order-confirm component

}
