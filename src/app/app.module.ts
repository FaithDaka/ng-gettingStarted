import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const appRoutes = [
  { 
    path:'', 
    component: ProductListComponent
  },
  {
    path: 'product/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'shipiing',
    component: ShippingComponent
  }
]
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/