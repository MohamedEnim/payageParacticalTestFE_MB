import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentProcessComponent } from '../pages/payment-process/payment-process.component';
import { PaymentDetailsComponent } from '../payment/payment-details/payment-details.component';
import { PaymentListComponent } from '../payment/payment-list/payment-list.component';
import { PaymentSuccessComponent } from '../payment/payment-success/payment-success.component';
import { PaymentMethodComponent } from '../payment/payment-method/payment-method.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    PaymentMethodComponent,
    PaymentListComponent,
    PaymentDetailsComponent,
    PaymentSuccessComponent,
    PaymentProcessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaymentRoutingModule,
    SharedModule,
    MaterialModule,
  ],

})
export class PaymentModule {}
