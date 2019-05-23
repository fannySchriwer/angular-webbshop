import { Moment } from 'moment';

export interface IOrder {
    id: number; 
    companyId: number;
    created: Moment;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: string;
    orderRows: [{productId: number, amount: number}];
}