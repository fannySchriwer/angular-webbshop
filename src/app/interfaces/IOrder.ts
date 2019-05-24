import { IOrderRow } from './IOrderRow';

export interface IOrder { 
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: string;
    orderRows: IOrderRow[];
}