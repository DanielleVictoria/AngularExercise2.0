import * as fromUserStore from '../store';
import * as fromShoppingCartStore from '../../shoppingcart/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls : ['./login.style.css']
})
export class ForgotPasswordFormComponent implements OnInit {

  users: User[];

  myModel = {
    username: "",
    email: "",
    mobile: ""
  }

  constructor(
    private store: Store<fromUserStore.UserState | fromShoppingCartStore.ShoppingCartState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Load all of the users
    this.store.dispatch(new fromUserStore.LoadUsers);

    // set the users to a variable to iterate later
    this.store.select(fromUserStore.getUsers).subscribe((users) => this.users = users);
  }

  handleSubmit() {
    if (!this.myModel.username || !this.myModel.email || !this.myModel.mobile) {
      window.alert ("Please fill out all of the needed entries");
      return; 
    }

    for (let user of this.users) {
      if (user.username == this.myModel.username && user.email == this.myModel.email && user.mobile == this.myModel.mobile) {
        window.alert ("Your password is "  + user.password);        
        this.router.navigate(['/login']);
        return;
      } 
    }

    window.alert ("No match found");
    return;
  }

}
