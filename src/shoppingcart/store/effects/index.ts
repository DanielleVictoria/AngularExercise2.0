import { ProductsEffects } from './products.effect';
import { CartsEffects } from './carts.effect';
import { CommentsEffects } from './comments.effect';
import { TransactionsEffects } from './transaction.effect';


export const effects : any[] = [
    ProductsEffects,
    CartsEffects,
    CommentsEffects,
    TransactionsEffects
]

export * from './products.effect';
export * from './carts.effect';
export * from './comments.effect';
export * from './transaction.effect';