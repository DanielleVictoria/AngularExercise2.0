import { ProductViewComponent } from "./productview.component";
import { NavbarComponent } from "./navbar.component";
import { FilterViewComponent } from "./filterview.component";
import { QuantitySelectorComponent } from "./quantityselector.component";
import { CheckoutComponent } from "./checkout.component";
import { PendingTransactionsComponent } from "./pendingtransactions.component";

export const components : any[] = [
    ProductViewComponent,
    NavbarComponent,
    FilterViewComponent,
    QuantitySelectorComponent,
    CheckoutComponent,
    PendingTransactionsComponent
]

export * from './productview.component';
export * from './navbar.component';
export * from './filterview.component';
export * from './quantityselector.component';
export * from './checkout.component'
export * from './pendingtransactions.component';
