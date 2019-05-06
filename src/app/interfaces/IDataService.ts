import { IProduct } from './IProduct';
import { Observable } from 'rxjs';

export interface IDataService {

    getData(): Observable<IProduct[]>;

}