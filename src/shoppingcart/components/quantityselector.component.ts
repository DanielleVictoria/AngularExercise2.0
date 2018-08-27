import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'quantityselector',
    template: `
    <div class='col-md-2'>
        <button (click)='subtract()'>-</button>
    </div>
    <div class='col-md-8'>
        <input type='text' [(ngModel)]='quantity' />
    </div>
    <div class='col-md-2'>
        <button (click)='add()'>+</button>
    </div>

    <ng-content select='controlbutton'></ng-content>
    `
})

export class QuantitySelectorComponent implements OnInit {

    @Input()
    quantity: number = 0;

    @Input()
    product : Product;

    @Output()
    productEntity : EventEmitter<{product : Product, quantity : number}> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    add() {
        this.quantity += 1;
    }

    subtract() {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    }



}