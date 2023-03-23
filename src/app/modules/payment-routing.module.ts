import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentProcessComponent } from '../pages/payment-process/payment-process.component';
import { PaymentDetailsComponent } from '../payment/payment-details/payment-details.component';
import { PaymentListComponent } from '../payment/payment-list/payment-list.component';
import { PaymentSuccessComponent } from '../payment/payment-success/payment-success.component';
import { PaymentSuccessGuardService } from '../services/payment-success-guard.service';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentProcessComponent,
    children: [
      { path: 'paymentMethod', component: PaymentListComponent },
      {
        path: 'paymentDetails/:paymentMethod',
        component: PaymentDetailsComponent,
      },
      {
        path: 'paymentSuccessed',
        canActivate: [PaymentSuccessGuardService],
        component: PaymentSuccessComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
