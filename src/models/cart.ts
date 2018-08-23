import { Product } from "./product";

export class Cart {
    id : number;
    products : Product[];
}

/*

export interface sampleCart {
    id: number;
    products: {
        [productID: number]: {
            product: Product,
            quantity: number
        };
    }
}




*/