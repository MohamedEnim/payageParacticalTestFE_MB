import { createAction } from '@ngrx/store';

export const FETCH_PAYMENT_METHOD_VALUE = '[Payment paymentList] Init Value';
export const FETCH_PAYMENT_METHOD_VALUE_SUCCESS =
  '[Payment paymentList] Init Value Success';
export const FETCH_PAYMENT_METHOD_VALUE_FAILURE =
  '[Payment paymentList] Init Value Failure';

export const FETCH_PAYMENT_DETAIL_VALUE = '[Payment paymentDetail] Init Value';
export const FETCH_PAYMENT_DETAIL_VALUE_SUCCESS =
  '[Payment paymentDetail] Init Value Success';
export const FETCH_PAYMENT_DETAIL_VALUE_FAILURE =
  '[Payment paymentDetail] Init Value Failure';

export const PAYE_REQUEST = '[Payment paymentDetail] Paye';
export const PAYE_REQUEST_SUCCESS = '[Payment paymentDetail] Paye Success';
export const PAYE_REQUEST_FAILURE = '[Payment paymentDetail] Paye Failure';

export const SET_LOADING_STATE = '[SHARED loadingSpinner] Set State';

export const ACCESS_PAYMENT_SUCCESS = '[Payment paymentSuccess] Payment Success';

export const fetchPaymentMethod = createAction(FETCH_PAYMENT_METHOD_VALUE);
export const fetchPaymentMethodSuccessed = createAction(
  FETCH_PAYMENT_METHOD_VALUE_SUCCESS,
  (payload) => payload
);
export const fetchPaymentMethodFailed = createAction(
  FETCH_PAYMENT_METHOD_VALUE_FAILURE,
  (payload) => payload
);

export const fetchPaymentDetail = createAction(
  FETCH_PAYMENT_DETAIL_VALUE,
  (payload) => payload
);
export const fetchPaymentDetailSuccessed = createAction(
  FETCH_PAYMENT_DETAIL_VALUE_SUCCESS,
  (payload) => payload
);
export const fetchPaymentDetailFailed = createAction(
  FETCH_PAYMENT_DETAIL_VALUE_FAILURE,
  (payload) => payload
);

export const payeRequest = createAction(PAYE_REQUEST, (payload) => payload);
export const payeRequestSuccessed = createAction(
  PAYE_REQUEST_SUCCESS
);
export const payeRequestFailed = createAction(
  PAYE_REQUEST_FAILURE
);

export const setLoadingSpinner = createAction(
  SET_LOADING_STATE
);

export const accessPaymentSuccess = createAction(
  ACCESS_PAYMENT_SUCCESS
);


