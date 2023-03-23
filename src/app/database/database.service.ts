import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements InMemoryDbService {
  createDb() {
    const paymentDetails = [
      {
        id: 1,
        paymentAmount: 16.5,
        currency: 'USD',
        paymentMethods: [
          {
            id: 'VISA',
            bankIndentifier: 'AZER258BNUO',
            name: 'VISA',
            image: 'assets/images/visaIcon.svg',
          },
          {
            id: 'SEPA',
            bankIndentifier: 'DSZE7892BVX',
            name: 'SEPA',
            image: 'assets/images/sepaIcon.svg',
          },
        ],
      },
      {
        id: 'VISA',
        bankIndentifier: 'AZER258BNUO',
        name: 'VISA',
        image: 'assets/images/visaIcon.svg',
        controls: [
          {
            label: 'Card holder',
            name: 'cardHolder',
            type: '',
            value: '',
            validators: {
              minLength: 15,
              maxLength: 50,
              required: true,
            },
          },
          {
            label: 'Card Number',
            name: 'cardNumber',
            type: 'text',
            value: '',
            validators: {
              luhn: 'custom',
              required: true,
            },
          },
          {
            label: 'Expiration date',
            name: 'expirationDate',
            type: '',
            value: '',
            validators: {
              pattern: '(1[0-2]|0[1-9])/[0-9]{2}',
              equalLength: 'MM/YY',
              required: true,
            },
          },
          {
            label: 'CVC',
            name: 'cvc',
            type: 'number',
            value: '',
            validators: {
              pattern: '[1-9]{3}',
              equalLength: 3,
              required: true,
            },
          },
        ],
      },
      {
        id: 'SEPA',
        bankIndentifier: 'DSZE7892BVX',
        name: 'SEPA',
        image: 'assets/images/sepaIcon.svg',
        controls: [
          {
            label: 'IBAN',
            name: 'iban',
            type: 'text',
            value: '',
            validators: {
              minLength: 15,
              maxLength: 32,
              required: true,
            },
          },
          {
            label: 'BIC',
            name: 'bic',
            type: 'text',
            value: '',
            validators: {
              pattern: '[1-9A-Za-z]{8}',
              equalLength: 8,
              required: true,
            },
          },
          {
            label: 'Bank account holder',
            name: 'bankAccountHolder',
            type: 'text',
            value: '',
            validators: {
              minLength: 15,
              maxLength: 50,
              required: true,
            },
          },
        ],
      },
    ];

    const payments: any[] = [{}];
    return { payments: payments, 'payment-details': paymentDetails };
  }
}
