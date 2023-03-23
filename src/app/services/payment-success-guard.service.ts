import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAccessToPaymentSuccess } from '../payment/store';
import { PaymentState } from '../payment/store/payment.state';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentSuccessGuardService implements CanActivate {
  constructor(private store: Store<PaymentState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(getAccessToPaymentSuccess).pipe(
      tap((val: boolean) => {
        if (val) {
          return true;
        } else {
          this.router.navigateByUrl('/payment/paymentMethod');
          return false;
        }
      })
    );
  }
}
