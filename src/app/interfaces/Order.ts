import { IOrder } from './IOrder';
import { Moment } from 'moment';

export class Order implements IOrder {

        id; 
        companyId: number;
        created: Moment;
        createdBy: string;
        paymentMethod: string;
        totalPrice: number;
        status: string;
        orderRows: [{productId: number, amount: number}];

}