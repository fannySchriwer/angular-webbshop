import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { MockDataService } from '../mock-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //products: IProduct[];

  constructor(){

  }

  ngOnInit() {
    //this.products = this.service.getData();
  }

}
