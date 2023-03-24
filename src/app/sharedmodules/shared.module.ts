import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [LoadingSpinnerComponent],
  providers: [],
})
export class SharedModule {}
