import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const APP_ROUTES: Routes = [ 
  {path: 'details/:id', component: DetailsComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'shoppingcart', component: CartItemsComponent}, 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  /*{path: '**', component: NotfoundComponent}*/
];

export const routing = RouterModule.forRoot(APP_ROUTES)

