export interface IOrder {
    id; 
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: [{productId: number, amount: number}];
}