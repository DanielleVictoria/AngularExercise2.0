import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductEntity } from '../../models/productEntity';
import { Store } from '@ngrx/store';
import { ShoppingCartState, getProductQuantity } from '../store';

@Component({
    selector: 'quantityselector',
    template: `
    <div class='row'>

        <div class='col-xs-3 col-sm-3 col-md-3 nopadding'>
            <button class='btn btn-default btn-block pink' type='button' (click)='subtract()'>-</button>
        </div>

        <div class='col-xs-6 col-sm-6 col-md-6 nopadding'>
            <input class='btn btn-default btn-block pink' min=0 type='number' [(ngModel)]='quantity' />
        </div>

        <div class='col-xs-3 col-sm-3 col-md-3 nopadding'>
            <button class='btn btn-default btn-block pink' type='button' (click)='add()'>+</button>
        </div>

        <button class="btn btn-default col-xs-12 col-sm-12 col-md-12 pink" type="button" [tooltip]='tooltipMessage' [delay]="500" placement='left' (click)='emitProductEntity()'>
            <ng-content select='span'></ng-content>
        </button>

    </div>
    `
})

export class QuantitySelectorComponent implements OnInit {

    // if the caller is the cart component, show its quantity
    @Input()
    isCart : boolean = false;

    @Input()
    product: Product;

    // outputs a {product,quantity}. This is according to the cart model
    @Output()
    productEntity: EventEmitter<ProductEntity> = new EventEmitter();

    quantity: number = 0;
    tooltipMessage : string = 'Add to Cart';

    constructor(
        private store : Store<ShoppingCartState>
    ) { }

    ngOnInit() {
        if (this.isCart && this.product) {
            this.store.select (getProductQuantity(this.product)).subscribe(quantity => this.quantity = quantity);
        }        

        if (this.isCart) {
            this.tooltipMessage = 'Edit Quantity';
        }
    }

    add() {
        this.quantity += 1;
    }

    subtract() {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    }

    emitProductEntity() {
        if (this.quantity == 0) {
            window.alert ("Quantity cannot be 0");
            return; 
        }

        let confirmed = window.confirm ("Confirm Order?");

        if (!confirmed) {
            return;
        }

        let entity: ProductEntity = {
            product: this.product,
            quantity: this.quantity
        }
        this.productEntity.emit(entity);
    }
}