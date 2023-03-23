import { createReducer, on } from '@ngrx/store';
import * as fromPayment from './payment.actions';
import { initialState } from './payment.state';
import { IPaymentMethodList } from '../../Models/paymentMethodList.model';
import { IPaymentDetail } from '../../Models/paymentDetail.model';

const _reducer = createReducer(
  initialState,
  on(
    fromPayment.fetchPaymentMethodSuccessed,
    (state: any, action: IPaymentMethodList) => {
      console.log('🚀 ~ file: payment.reducers.ts:12 ~ state:', state);
      return {
        ...state,
        paymentMethodList: action,
        isLoading: false,
      };
    }
  ),
  on(fromPayment.fetchPaymentMethodFailed, (state: any, action: any) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(
    fromPayment.fetchPaymentDetailSuccessed,
    (state: any, action: IPaymentDetail) => {
      return {
        ...state,
        paymentDetail: action,
        isLoading: false,
      };
    }
  ),
  on(fromPayment.fetchPaymentDetailFailed, (state: any, action: any) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(fromPayment.payeRequestSuccessed, (state: any, action: any) => {
    return {
      ...state,
      isLoading: false,
      hasAccessToPaymentSuccess: true,
    };
  }),
  on(fromPayment.payeRequestFailed, (state: any, action: any) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(fromPayment.setLoadingSpinner, (state: any, action: any) => {
    return {
      ...state,
      isLoading: true,
    };
  })
);

export function paymentReducer(state: any, action: any) {
  return _reducer(state, action);
}
