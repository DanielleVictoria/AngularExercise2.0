import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUserStore from '../users/store';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  loggedin : boolean;
  
  constructor (
    private store : Store <fromUserStore.UserState>,
    private router : Router
  ) {}

  ngOnInit() {
    this.store.select (fromUserStore.getUserLoggedIn)
      .subscribe((loggedin) => this.loggedin = loggedin);
    this.store.dispatch (new fromUserStore.LoadUsers);  

    this.loggedin ? this.router.navigate (['/shop']) : this.router.navigate (['/login']);
  }

  
}
