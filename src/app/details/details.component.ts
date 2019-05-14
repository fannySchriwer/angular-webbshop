import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/CartItem';

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

  productsToShow: Product[] = [];
  productsToStorage: Product[] = [];
  itemsToStorage: CartItem[] = [];
  alertMsg = "";
  cartItem = new CartItem();


  addCartItem(quantity: number, product: Product) {
    this.cartItem = {
      id: product.id,
      quantity: +quantity,
      totalPrice: +quantity*product.price
    };

    this.alertMsg = "Added to cart";
    this.itemsToStorage.push(this.cartItem);
    this.service.addCartItemToStorage(this.itemsToStorage);
  }

  addProduct(product: Product) {
    this.alertMsg = "Added to cart";
    this.productsToStorage.push(product);
    this.service.addToCart(this.productsToStorage);
  }

  onAddToCart(quantity: number, product: Product) {
    this.productsToStorage = this.service.getCartItems();

    if(this.productsToStorage === null) {
      this.productsToStorage = [];
      this.addProduct(product);
      this.addCartItem(quantity, product);

    } else {
      let foundItem: boolean = false;
      let foundProduct: boolean = false;
      this.itemsToStorage = this.service.getCartItemFromStorage();

      if(this.itemsToStorage !== null) {

      for(let i = 0; i < this.productsToStorage.length; i++) {
        if(this.productsToStorage[i].id === product.id)  {
          foundProduct = true;

          for(let i = 0; i < this.itemsToStorage.length; i++) {    
            if(this.itemsToStorage[i].id === product.id) {
              this.itemsToStorage[i].quantity = +quantity;
              this.itemsToStorage[i].totalPrice = +quantity*product.price;
              this.alertMsg = "Item already in cart, updated quantity";
              foundItem = true;
            }
          }
          this.service.addCartItemToStorage(this.itemsToStorage);
        }     
      } 
    }     
      if(foundItem === false) {
        this.addCartItem(quantity, product);
      }  
      if(foundProduct === false) {
        this.addProduct(product);
      }   
    }
  }

  showAlert() {
//add code to show correct alert with bootstrap classes and run it in add to cart
  }

  getProduct(productId: number) {
    this.service.getData()
    .subscribe((data: Product[]) => {
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
