import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TooltipModule, ModalModule } from 'ngx-bootstrap';
import { NavbarComponent } from './components/navbar.component';
import { reducers, effects } from './store';

const routes: Routes = [
    { path: 'shop', component: fromContainers.ShopComponent },
    { path: 'cart', component: fromContainers.CartComponent },
    { path: 'checkout', component : fromComponents.CheckoutComponent},
    { path: 'pendingtransactions', component : fromComponents.PendingTransactionsComponent} 
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature ('shoppingcart', reducers),
        //EffectsModule.forFeature (effects),
        FormsModule,
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
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
