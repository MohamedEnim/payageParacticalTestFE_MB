export interface IPayment {
  cardExpiration?: string;
  cvc?: string;
  cardHolderName?: string;
  cardNumber?: string;
  iban?: string;
  bic?: string;
  accountHolder?: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  id: number;
}
