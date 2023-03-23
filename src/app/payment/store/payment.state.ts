import { IPaymentMethodList } from '../../Models/paymentMethodList.model';
import { IPaymentDetail } from '../../Models/paymentDetail.model';

export interface PaymentState {
  paymentMethodList: IPaymentMethodList;
  paymentDetail: IPaymentDetail;
  isLoading: boolean;
  hasAccessToPaymentSuccess: boolean;
}

export const initialState = {
  paymentMethodList: {},
  paymentDetail: {},
  isLoading: false,
  hasAccessToPaymentSuccess: false
};
