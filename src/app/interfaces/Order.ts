import { IOrder } from './IOrder';

export class Order implements IOrder {
        id: number; 
        companyId: number;
        created: string;
        createdBy: string;
        paymentMethod: string;
        totalPrice: number;
        status: string;
        orderRows: [{amount: number, productId: number}];
}