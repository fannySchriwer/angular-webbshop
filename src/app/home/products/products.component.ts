import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData().subscribe((data) => {      
      this.products = data;
    });
  }

}
