import { Cart } from "./cart";

export class Transaction {
    id : number;
    cart : Cart;
    status : string;
    overallprice : number;
}