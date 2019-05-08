import { IOrder } from './IOrder';

export class Order implements IOrder {

        id; 
        companyId: number;
        created: string;
        createdBy: string;
        paymentMethod: string;
        totalPrice: number;
        status: number;
        orderRows: [];

}