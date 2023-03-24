export interface IPaymemtMethod {
    id: string;
    bankIndentifier: string;
    name: string;
    image: string;
}

export enum PaymemtMethod {
    VISA = "VISA",
     SEPA = "SEPA"
}

