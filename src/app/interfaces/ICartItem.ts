import { IProduct } from './IProduct';

export interface ICartItem {

    product: IProduct;
    quantity: number;
    totalPrice: number;
   
   
   /* private id: number;
    private quantity: number;
    private totalPrice: number;

    constructor(id, quantity, totalPrice) {
        this.id = id;
        this.quantity = quantity;
        this.totalPrice = totalPrice;

    }*/
}