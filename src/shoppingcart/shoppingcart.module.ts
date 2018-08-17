// from angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// from ngrx
import { StoreModule } from '@ngrx/store';

// from projects
import * as fromContainers from './containers';

import { ShoppingCartComponent } from './shoppingcart.component';
import { reducers } from './store';

const routes: Routes = [
    { path: 'products', component: fromContainers.ProductListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forFeature ('shoppingcart', reducers)
    ],
    exports: [
        ShoppingCartComponent,
        RouterModule
    ],
    declarations: [
        ShoppingCartComponent,
        fromContainers.containers
    ],
    providers: [],
})
export class ShoppingCartModule { }
