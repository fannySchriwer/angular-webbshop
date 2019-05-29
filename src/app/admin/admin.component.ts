import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IOrder } from '../interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: IOrder[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrders().subscribe((data) => {      
      this.orders = data;

      for(let i = 0; i < this.orders.length; i++) {
        if(this.orders[i].companyId == 11) {
          console.log(this.orders);
          return this.orders;
        }
      }

    });
  }
}
