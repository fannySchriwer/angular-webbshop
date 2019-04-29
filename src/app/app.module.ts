import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { PrintProductComponent } from './home/products/print-product/print-product.component';
import { DetailsComponent } from './details/details.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { AdminComponent } from './admin/admin.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const appRoutes = [
  /*{path: 'details/:id', component: DetailsComponent},*/
  {path: 'home', component: HomeComponent}, 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  /*{path: '**', component: NotfoundComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PrintProductComponent,
    DetailsComponent,
    OrderFormComponent,
    OrderConfirmComponent,
    AdminComponent,
    CartItemsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
