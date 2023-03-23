import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentDetailsComponent } from './payment/payment-details/payment-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaymentProcessComponent } from './pages/payment-process/payment-process.component';

const routes: Routes = [
  { path: 'payment', redirectTo: 'payment/paymentMethod' },
  { path: '', pathMatch: 'full', redirectTo: 'payment/paymentMethod' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
