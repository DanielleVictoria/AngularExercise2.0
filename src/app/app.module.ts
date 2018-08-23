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

import { AppComponent } from './app.component';

import {reducers, effects} from '../shoppingcart/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersModule } from '../users/users.module';

const routes: Routes = [
  { path: '**', redirectTo: '/shop', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    UsersModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    StoreModule.forRoot (reducers),
    EffectsModule.forRoot (effects),
    StoreDevtoolsModule.instrument()
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
