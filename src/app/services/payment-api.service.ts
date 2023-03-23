import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPaymentDetail } from '../Models/paymentDetail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly END_POINT_PAYMENT_DETAILS: string = 'api/payment-details';
  private readonly END_POINT_PAYMENT: string = 'api/payments';

  constructor(private http: HttpClient) {}

  getPaymentMethods() {
    return this.http.get<any[]>(this.END_POINT_PAYMENT_DETAILS);
  }

  getPaymentDetail(paymentMethod: string) {
    const url = `${this.END_POINT_PAYMENT_DETAILS}/${paymentMethod}`;
    return this.http.get<IPaymentDetail>(url);
  }

  savePayment(payment: any) {
    return this.http.post<any>(this.END_POINT_PAYMENT, payment);
  }
}
