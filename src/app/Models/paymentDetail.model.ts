
import { IFormControls } from './formControl.model';

export interface IPaymentDetail {
    id: string;
    bankIndentifier: string;
    name: string;
    image: string;
    controls: IFormControls[];
}


