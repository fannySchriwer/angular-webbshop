import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { IProduct } from '../interfaces/IProduct';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  productsToShow: IProduct[] = [];
  itemsToStorage: ICartItem[] = [];
  alertMsg = "";
  cartItem: ICartItem;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      myParams['id']; 
      let productId = myParams['id'];
      this.getProduct(productId);
    });
    
  }

  addToCart(quantity: number, product: IProduct) {
    this.cartItem = {
      product: product,
      quantity: +quantity,
      totalPrice: +quantity*product.price
    };

    this.alertMsg = "Added to cart";
    this.itemsToStorage.push(this.cartItem);
    this.service.addCartItemsToStorage(this.itemsToStorage);
  }

  onAddToCart(quantity: number, product: IProduct) {
    this.itemsToStorage = this.service.getCartItemsFromStorage();

    if(this.itemsToStorage === null) {
      this.itemsToStorage = [];
      this.addToCart(quantity, product);

    } else {
      let foundItem: boolean = false;

      if(this.itemsToStorage !== null) {
        for(let i = 0; i < this.itemsToStorage.length; i++) {    
          if(this.itemsToStorage[i].product.id === product.id) {
            this.itemsToStorage[i].quantity = +quantity;
            this.itemsToStorage[i].totalPrice = +quantity*product.price;
            this.alertMsg = "Item already in cart, updated quantity";
            foundItem = true;
          }
        }
      this.service.addCartItemsToStorage(this.itemsToStorage);
    }     
      if(foundItem === false) {
        this.addToCart(quantity, product);
      }   
    }
  }

  showAlert() {
    //add code to show correct alert with bootstrap classes and run it in add to cart
  }

  getProduct(productId: number) {
    this.service.getData()
    .subscribe((data: IProduct[]) => {
      for(let i = 0; i < data.length; i++){
        const product = data[i];
        const prodID = data[i].id;
        
        if(prodID == productId) {
          this.productsToShow.push(product);
        }
      }
    });
  }

}
