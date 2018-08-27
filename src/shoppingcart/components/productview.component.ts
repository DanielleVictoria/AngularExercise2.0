import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'productview',
    templateUrl: 'productview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {

    @Input()
    product: Product;

    constructor() { }

    ngOnInit() {
       
    }
}