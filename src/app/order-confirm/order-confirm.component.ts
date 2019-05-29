import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { DataService } from '../data.service';


@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

 // collectedOrder: IOrder;
   
  constructor(private service: DataService) { }

  ngOnInit() {
   // this.collectedOrder = this.service.getOrderFromStorage();

   // console.log(this.collectedOrder)
    //sessionStorage.clear();
  }
}
