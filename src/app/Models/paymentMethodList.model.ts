import { IPaymemtMethod } from './paymentMethod.model';

export interface IPaymentMethodList {
    id: number,
    paymentAmount: number;
    currency: string;
    paymentMethods: IPaymemtMethod[]
}

