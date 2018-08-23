import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'productview',
    templateUrl: 'productview.component.html'
})
export class ProductViewComponent implements OnInit {

    @Input()
    product: Product;

    @Output()
    productEmitter : EventEmitter<Product> = new EventEmitter<Product>();

    constructor() { }

    ngOnInit() {
       
    }

    emitProduct () {
        this.productEmitter.emit (this.product);
    }
}