import * as fromShoppingCartStore from '../store'
import * as fromUserStore from '../../users/store';
import { Component, OnInit, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductComment } from '../../models/comments';
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
    currentUser: User;
    comments: Observable<ProductComment[]>;
    userComment: ProductComment;

    constructor(
        private modalService: BsModalService,
        private store: Store<fromShoppingCartStore.ShoppingCartState | fromUserStore.UserState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromUserStore.LoadUsers);
        this.store.select(fromUserStore.getCurrentUser).subscribe(user => this.currentUser = user);
    }

    // show the modal when the picture is clicked
    showDetails(template: TemplateRef<any>) {
        this.store.dispatch(new fromShoppingCartStore.LoadComments);
        this.comments = this.store.select(fromShoppingCartStore.getCommentsOfProduct(this.product.id));
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: ' modal-lg' }));
    }

    // used to get the username of the users who commented in the product
    getUsername(id: number): Observable<string> {
        return this.store.select(fromUserStore.getUsernameWithID(id));
    }

    // control for the add comment
    addComment(message: string) {

        if (!message) {
            window.alert("Please fill out the commment section");
            return;
        }

        this.userComment = {
            id: 0,
            userid: this.currentUser.id,
            productid: this.product.id,
            message: message
        }

        this.store.dispatch(new fromShoppingCartStore.AddComment(this.userComment));

    }

}