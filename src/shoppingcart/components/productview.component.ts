import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Product } from '../../models/product';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProductComment } from '../../models/comments';
import * as fromShoppingCartStore from '../store'
import * as fromUserStore from '../../users/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
    selector: 'productview',
    templateUrl: 'productview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {

    @Input()
    product: Product;

    modalRef: BsModalRef;
    comments: Observable<ProductComment[]>;
    currentUser : User;
    comment : ProductComment;

    constructor(
        private modalService: BsModalService,
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromUserStore.LoadUsers);
        this.store.select (fromUserStore.getCurrentUser).subscribe(user => this.currentUser = user);
    }

    showDetails(template: TemplateRef<any>) {
        this.store.dispatch(new fromShoppingCartStore.LoadComments);
        this.comments = this.store.select(fromShoppingCartStore.getCommentsOfProduct(this.product.id));
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: ' modal-lg' }));
    }

    getUsername(id: number): Observable<string> {
        return this.store.select(fromUserStore.getUsernameWithID(id));
    }

    addComment(message : string) {

        if (!message) {
            window.alert ("Please fill out the commment section");
            return;
        }

        this.comment = {
            id : 0,
            userid : this.currentUser.id,
            productid : this.product.id,
            message : message
        }

        this.store.dispatch (new fromShoppingCartStore.AddComment(this.comment));

    }

}