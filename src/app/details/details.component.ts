import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      myParams['id']; 
      let productId = myParams['id'];
      this.getProduct(productId);
    });
    
  }

  cartItems: Product[] = [];

  onAddToCart(product: Product) {
    this.service.addToCart(product);
  }

  productList: Product[] = [];

  getProduct(productId: number) {

    this.service.getData()
    .subscribe((data: Product[]) => {
      for(let i = 0; i < data.length; i++){
        const product = data[i];
        const prodID = data[i].id;
        
        if(prodID == productId) {
          this.productList.push(product);
        }
      }

    });

  }

}
