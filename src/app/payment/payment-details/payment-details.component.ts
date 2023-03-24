import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { exhaustMap } from 'rxjs/operators';
import { PaymentState } from '../store/payment.state';
import { Store } from '@ngrx/store';
import {
  fetchPaymentDetail,
  setLoadingSpinner,
} from '../store/payment.actions';
import { getpaymentDetail } from 'src/app/payment/store/payments.selectors';
import { IPaymentDetail } from 'src/app/Models/paymentDetail.model';
import { payeRequest } from '../store/payment.actions';
import { PaymentFormService } from 'src/app/services/payment-form.service';
import { IPayment } from './../../Models/payment';
import { IFormControls } from 'src/app/Models/formControl.model';
import { PaymemtMethod } from 'src/app/Models/paymentMethod.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  paymentAmount: any;
  currency: any;
  paymentMethod: any;
  paymentForm!: FormGroup;
  isShowForm: boolean = false;
  paymentDetail!: IPaymentDetail;
  paymentControls!: FormArray;

  constructor(
    private route: ActivatedRoute,
    private store: Store<PaymentState>,
    private paymentFormSErv: PaymentFormService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        exhaustMap((queryParam: Params) => {
          this.paymentAmount = queryParam.get('paymentAmount');
          this.currency = queryParam.get('currency');
          this.paymentMethod = queryParam.get('paymentMethod');
          this.store.dispatch(setLoadingSpinner());
          this.store.dispatch(
            fetchPaymentDetail({ payload: this.paymentMethod })
          );
          return this.store.select(getpaymentDetail);
        })
      )
      .subscribe((paymentDetail: IPaymentDetail) => {
        this.paymentDetail = paymentDetail;
        if (Object.keys(paymentDetail).length > 0) {
          this.isShowForm = true;
          this.paymentForm = this.paymentFormSErv.createForm(
            this.paymentDetail
          );
          this.paymentControls = this.paymentFormSErv.paymentControls;
        }
      });
  }

  onSubmit() {
    if (this.paymentForm.invalid) return;

    let payment: IPayment;
    const paymentControls = <FormArray>this.paymentForm.get('paymentControls');
    const min = 0;
    const max = 1000000;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.paymentMethod === PaymemtMethod.VISA) {
      payment = {
        id,
        cardHolderName: paymentControls.controls[0].value,
        cardNumber: paymentControls.controls[1].value,
        cardExpiration: paymentControls.controls[2].value,
        cvc: paymentControls.controls[3].value,
        amount: this.paymentAmount,
        currency: this.currency,
        paymentMethod: this.paymentMethod,
      };
    } else {
      payment = {
        id,
        iban: paymentControls.controls[0].value,
        bic: paymentControls.controls[1].value,
        accountHolder: paymentControls.controls[2].value,
        amount: this.paymentAmount,
        currency: this.currency,
        paymentMethod: this.paymentMethod,
      };
    }

    this.store.dispatch(setLoadingSpinner());
    this.store.dispatch(payeRequest({ payment }));
  }

  errorMessage(controlName: number, controlValidators: IFormControls) {
    return this.paymentFormSErv.errorMessage(controlName, controlValidators);
  }
}
