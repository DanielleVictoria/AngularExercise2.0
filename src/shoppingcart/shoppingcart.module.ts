// from angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// from ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// from projects
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

import { NavbarComponent } from './components/navbar.component';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
    { path: 'shop', component: fromContainers.ShopComponent },
    { path: 'cart', component: fromContainers.CartComponent }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature ('shoppingcart', reducers),
        //EffectsModule.forFeature (effects);
    ],
    exports: [
        NavbarComponent,
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        fromContainers.containers,
        fromComponents.components
    ],
    providers: [
        ...fromServices.services
    ],
})
export class ShoppingCartModule { }
