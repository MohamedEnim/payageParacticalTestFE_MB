import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentState } from './payment.state';

const paymentMethodList = createFeatureSelector<PaymentState>('payment');

export const getpaymentMethodList = createSelector(
  paymentMethodList,
  (state: PaymentState) => {
    return state.paymentMethodList;
  }
);

export const getpaymentDetail = createSelector(
  paymentMethodList,
  (state: PaymentState) => {
    return state.paymentDetail;
  }
);

export const getLoadingState = createSelector(
  paymentMethodList,
  (state: PaymentState) => {
    return state.isLoading;
  }
);

export const getAccessToPaymentSuccess = createSelector(
  paymentMethodList,
  (state: PaymentState) => {
    return state.hasAccessToPaymentSuccess;
  }
);

