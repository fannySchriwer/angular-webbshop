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

  addedCartItems: Product[] = [];
  alertMsg = "";

  onAddToCart(product: Product) {
    this.addedCartItems = this.service.getCartItems();
    if(this.addedCartItems == null) {
      this.addedCartItems = [];
      this.addedCartItems.push(product);
      this.service.addToCart(this.addedCartItems);
      this.alertMsg = "Added to cart";
      //this.service.addToCart(product);
    } else {
      let compProduct = this.addedCartItems.find(prod => prod.id == product.id);
        if(compProduct == null) {
          this.addedCartItems.push(product);
          this.service.addToCart(this.addedCartItems);
        } else {
          this.alertMsg = "Item already in cart";
        }
    }
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
