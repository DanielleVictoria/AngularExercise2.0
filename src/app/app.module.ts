// from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// from ngrx/store
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// from projects ( Modules )
import { ShoppingCartModule } from '../shoppingcart/shoppingcart.module';

// from project ( Component )
import { AppComponent } from './app.component';

import * as fromFeature from '../shoppingcart/store/reducers'

const routes: Routes = [
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    StoreModule.forRoot (fromFeature.reducers)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
