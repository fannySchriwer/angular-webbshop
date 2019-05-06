import { Component, OnInit, Input, Output } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-print-product',
  templateUrl: './print-product.component.html',
  styleUrls: ['./print-product.component.css']
})
export class PrintProductComponent implements OnInit {
  @Input() mockProducts: IProduct;
  @Input() product: IProduct;

  constructor(){
  }

  ngOnInit() {
  }

}
