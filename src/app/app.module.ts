import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database/database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaymentModule } from './payment/payment.module';
import { SharedModule } from './sharedmodules/shared.module';
import { MaterialModule } from './sharedmodules/material.module';
import { PaymentEffects, paymentReducer } from './payment/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ payment: paymentReducer }),
    EffectsModule.forRoot([PaymentEffects]),
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
    ReactiveFormsModule,
    PaymentModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
