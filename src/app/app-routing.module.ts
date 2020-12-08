import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'landing',
    pathMatch : 'full'
  },
  {
    path: 'landing',
    component : LandingComponent
  },
  {
    path : 'cart',
    component: CartComponent
  },
  {
    path :'orders',
    component: OrdersComponent
  },
  {
    path : '**',
    redirectTo : 'landing',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
