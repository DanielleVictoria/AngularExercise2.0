import { ProductsService } from './products.service';
import { CartService } from './cart.service';

export const services : any[] = [
    ProductsService,
    CartService
]

export * from './products.service';
export * from './cart.service';