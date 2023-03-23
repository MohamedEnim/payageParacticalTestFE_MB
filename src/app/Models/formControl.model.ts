import { IFormValidators } from './validators.model';

export interface IFormControls {
    name: string;
    label: string;
    value: string;
    type: string;
    validators: IFormValidators;
  }




  