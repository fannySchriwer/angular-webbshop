import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { DataService } from '../data.service';


@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  collectedOrders: IOrder[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrders().subscribe((data) => {      
      this.collectedOrders = data}
      );

      for(let i = 0; i < this.collectedOrders.length; i++) {
        if(this.collectedOrders[i].companyId == 11) {
          //print the latest order made with the same input name (or change to email)
          //how to get created by to send here?          
        }
      }
      sessionStorage.clear();
    }
}
