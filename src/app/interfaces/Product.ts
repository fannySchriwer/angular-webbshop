import { IProduct } from './IProduct';

export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    year: number;
    added: string;
    productCategory: [];
}