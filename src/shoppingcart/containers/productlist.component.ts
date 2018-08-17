// from angular
import { Component, OnInit } from '@angular/core';

// from ngrx
import { Store } from '@ngrx/store';

// from rxjs
import { Observable } from 'rxjs';

// from projects
import * as fromStore from '../store'

import { Product } from '../../models/product';

@Component({
    selector: 'productlist',
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit {

    products$ : Observable<Product>;

    constructor(
        private store : Store<fromStore.ShoppingCartState>
    ) { }

    ngOnInit() { 
        console.log (this.store);
    }
}