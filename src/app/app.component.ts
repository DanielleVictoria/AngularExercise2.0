import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUserStore from '../users/store';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  loggedin : Observable<boolean>;
  
  constructor (
    private store : Store <fromUserStore.UserState>
  ) {}

  ngOnInit() {
    this.loggedin = this.store.select (fromUserStore.getUserLoggedIn);
  }
}
