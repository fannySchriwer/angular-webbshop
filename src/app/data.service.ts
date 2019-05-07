import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
import { IDataService } from './interfaces/IDataService';
import { Product } from 

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private httpClient: HttpClient) { }

   URL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  getData(): Observable<IProduct[]> {    
    return this.httpClient.get<IProduct[]>(this.URL);
  }

  addToCart(product: Product): Observable<IProduct[]> {
    return product;
  }

}
