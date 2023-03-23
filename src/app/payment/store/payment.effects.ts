import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPayment from './payment.actions';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PaymentService } from '../../services/payment-api.service';
import { IPaymentDetail } from '../../Models/paymentDetail.model';
import { Router } from '@angular/router';

@Injectable()
export class PaymentEffects {
  constructor(
    private action$: Actions,
    private paymentSErv: PaymentService,
    private router: Router
  ) {}

  fetchPaymentMethods$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(fromPayment.fetchPaymentMethod),
      switchMap(() => {
        return this.paymentSErv.getPaymentMethods().pipe(
          map((result: any[]) => {
            return fromPayment.fetchPaymentMethodSuccessed({ ...result[0] });
          }),
          catchError((error: any) =>
            of(fromPayment.fetchPaymentMethodFailed({ error }))
          )
        );
      })
    );
  });

  fetchPaymentDetail$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromPayment.fetchPaymentDetail),
      switchMap((result: any) => {
        return this.paymentSErv.getPaymentDetail(result.payload).pipe(
          map((result: IPaymentDetail) => {
            return fromPayment.fetchPaymentDetailSuccessed({ ...result });
          }),
          catchError((error: any) =>
            of(fromPayment.fetchPaymentDetailFailed({ error }))
          )
        );
      })
    );
  });

  savePayment$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromPayment.payeRequest),
      switchMap((result: any) => {
        return this.paymentSErv.savePayment(result.payment).pipe(
          map((result: any) => {
            this.router.navigate(['/payment/paymentSuccessed']);
            return fromPayment.payeRequestSuccessed();
          }),
          catchError((error: any) => of(fromPayment.payeRequestFailed()))
        );
      })
    );
  });
}
