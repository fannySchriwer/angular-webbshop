import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { AdminComponent } from './admin/admin.component';

const APP_ROUTES: Routes = [ 
  {path: 'details/:id', component: DetailsComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'shoppingcart', component: CartItemsComponent},
  {path: 'orderform', component: OrderFormComponent},
  {path: 'orderconfirm', component: OrderConfirmComponent},
  {path: 'admin', component: AdminComponent},  
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  /*{path: '**', component: NotfoundComponent}*/
];

export const routing = RouterModule.forRoot(APP_ROUTES);

