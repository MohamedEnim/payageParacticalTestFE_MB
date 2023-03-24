import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IPaymentDetail } from 'src/app/Models/paymentDetail.model';
import { ValidatorType } from '../enums/validatorType.enum';

@Injectable({
  providedIn: 'root',
})
export class PaymentFormService {
  paymentForm!: FormGroup;

  get paymentControls(): FormArray {
    return this.paymentForm.get('paymentControls') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  createForm(paymentDetail: IPaymentDetail) {
    this.paymentForm = this.fb.group(
      {
        paymentControls: this.fb.array([]),
      },
      { updateOn: 'submit' }
    );
    this.createFormControl(paymentDetail.controls);
    return this.paymentForm;
  }

  createFormControl(controls: any) {
    for (const control of controls) {
      const validatorsToAdd: any[] = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case ValidatorType.Required:
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case ValidatorType.MinLength:
            validatorsToAdd.push(Validators.minLength(value as number));
            break;
          case ValidatorType.MaxLength:
            validatorsToAdd.push(Validators.maxLength(value as number));
            break;
          case ValidatorType.Pattern:
            validatorsToAdd.push(Validators.pattern(value as string));
            break;
          case ValidatorType.LuhnValidator:
            if (value) {
              validatorsToAdd.push(this.luhnCheckValidator.bind(this));
            }
            break;
          default:
            break;
        }
      }
      const addControl = this.fb.control(control.value, validatorsToAdd);
      this.paymentControls.push(addControl);
    }
  }

  luhnCheck = (num: any) => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map((x) => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  };

  luhnCheckValidator(control: AbstractControl): { [key: string]: any } | null {
    const isLuhn = this.luhnCheck(control.value);
    return isLuhn ? null : { luhn: 'Card number not valid' };
  }

  errorMessage(controlName: any, controlValidators: any) {
    const error = (<FormArray>this.paymentForm.get('paymentControls')).get(
      controlName.toString()
    );

    if (error?.hasError(ValidatorType.Required)) {
      return `${controlValidators.label} is required`;
    } else if (error?.hasError(ValidatorType.MinLength)) {
      return `Min length is ${controlValidators.validators.minlength}`;
    } else if (error?.hasError(ValidatorType.MaxLength)) {
      return `Max length is ${controlValidators.validators.maxlength}`;
    } else if (error?.hasError(ValidatorType.Pattern)) {
      return Object.prototype.toString.call(
        controlValidators.validators.equalLength
      ) === '[object Number]'
        ? `Length is ${controlValidators.validators.equalLength}`
        : `Pattern is ${controlValidators.validators.equalLength}`;
    } else if (error?.hasError(ValidatorType.LuhnValidator)) {
      return `Card number not valid`;
    } else return null;
  }
}
