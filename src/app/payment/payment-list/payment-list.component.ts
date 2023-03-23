import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Store } from '@ngrx/store';

import { getpaymentMethodList } from '../store/payments.selectors';
import { PaymentState } from '../store/payment.state';
 

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
})
export class PaymentListComponent implements OnInit {
  paymentMethod$!: Observable<any>;

  constructor(private store: Store<PaymentState>) {}

  ngOnInit() {
    this.paymentMethod$ = this.store.select(getpaymentMethodList);
  }
}
