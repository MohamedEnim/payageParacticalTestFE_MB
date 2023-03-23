import { Component, Input, OnInit } from '@angular/core';
import { IPaymemtMethod } from '../../Models/paymentMethod.model';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
})
export class PaymentMethodComponent implements OnInit {
  @Input() paymentMethod!: IPaymemtMethod;
  @Input() paymentAmount: any;
  @Input() currency: any;
  constructor() {}

  ngOnInit(): void {}
}
