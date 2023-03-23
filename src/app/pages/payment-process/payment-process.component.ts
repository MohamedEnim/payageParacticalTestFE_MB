import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { PaymentState } from '../../payment/store/payment.state';
import {
  getLoadingState,
  getpaymentMethodList,
} from '../../payment/store/payments.selectors';
import * as fromPayment from '../../payment/store';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styleUrls: ['./payment-process.component.css'],
})
export class PaymentProcessComponent implements OnInit, AfterViewInit {
  paymentMethod$!: Observable<any>;
  loading$!: Observable<boolean>;
  isLoading!: boolean;

  constructor(
    private store: Store<PaymentState>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store.dispatch(fromPayment.setLoadingSpinner());
    this.store.dispatch(fromPayment.fetchPaymentMethod());
    this.paymentMethod$ = this.store.select(getpaymentMethodList);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.store.select(getLoadingState).subscribe((isloading: boolean) => {
        this.isLoading = isloading;
        this.cd.detectChanges();
      });
    }, 0);
  }
}
