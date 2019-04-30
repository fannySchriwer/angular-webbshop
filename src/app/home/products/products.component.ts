import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/mock-data.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  mockProducts: IProduct[];

  constructor(service: MockDataService) { 
      this.mockProducts = service.getData();
  }

  ngOnInit() {
  }

}
