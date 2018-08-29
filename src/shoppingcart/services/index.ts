import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { CommentsService} from './comment.service';
import { TransactionsService } from './transaction.service';


export const services : any[] = [
    ProductsService,
    CartService,
    CommentsService,
    TransactionsService
]

export * from './products.service';
export * from './cart.service';
export * from './comment.service';
export * from './transaction.service';