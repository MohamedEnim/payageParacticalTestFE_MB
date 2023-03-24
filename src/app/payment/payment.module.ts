import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentProcessComponent } from '../pages/payment-process/payment-process.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from '../sharedmodules/shared.module';
import { MaterialModule } from '../sharedmodules/material.module';

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
