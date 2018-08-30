import * as fromContainers from './containers';
import * as fromComponents from './components';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TooltipModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import {reducers} from './store/reducers';
import {effects} from './store/effects';
import { UserService } from './store/services/users.service';
import { ShoppingCartModule } from '../shoppingcart/shoppingcart.module';

const routes: Routes = [
    {path : 'login', component : fromContainers.LoginComponent},
    {path : 'profile', component : fromComponents.UserInformationComponent},
    {path : 'forgotpassword', component : fromComponents.ForgotPasswordFormComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature ('UserFeature',reducers),
        EffectsModule.forFeature (effects),
        BrowserModule,
        FormsModule,
        ShoppingCartModule,
        TooltipModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    exports: [
        RouterModule,
        ...fromContainers.containers,
        ... fromComponents.components
    ],
    providers : [
        UserService
    ],
    declarations : [
        ...fromContainers.containers,
        ... fromComponents.components
    ]
})
export class UsersModule { }