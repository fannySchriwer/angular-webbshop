import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { IProduct } from '../interfaces/IProduct';

declare var $: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productsToShow: IProduct[] = [];
  alertMsg = "";

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      myParams['id']; 
      let productId = myParams['id'];
      this.getProduct(productId);
    });    
  }

  validateInputQuantity(quantity: number, product: IProduct) {
    if(quantity > 0) {
      this.onAddToCart(quantity, product);
    } else {
      alert("You must order at least 1 poster");
    }
  }

  onAddToCart(quantity: number, product: IProduct) {
    this.service.itemsToStorage = this.service.getCartItemsFromStorage();

    if(this.service.itemsToStorage === null) {
      this.service.itemsToStorage = [];
      this.alertMsg = "This product was added to your cart";
      this.service.addToCart(quantity, product);

    } else {
      let foundItem: boolean = false;

      if(this.service.itemsToStorage !== null) {
        for(let i = 0; i < this.service.itemsToStorage.length; i++) {    
          if(this.service.itemsToStorage[i].product.id === product.id) {
            this.service.itemsToStorage[i].quantity = +quantity;
            this.service.itemsToStorage[i].totalPrice = +quantity*product.price;
            this.alertMsg = "Product quantity was updated in cart"; 
            $(".alert").removeClass("alert-hide").addClass("alert-secondary");  
            foundItem = true;
          }
        }
      this.service.addCartItemsToStorage(this.service.itemsToStorage);
    }     
      if(foundItem === false) {
        this.alertMsg = "This product was added to your cart";
        this.service.addToCart(quantity, product);
        
      }   
    }
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
