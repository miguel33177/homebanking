import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './features/add/add.component';
import { WithdrawComponent } from './features/withdraw/withdraw.component';
import { TransactionsComponent } from './features/transactions/transactions.component';


@NgModule({
  declarations: [AppComponent, MainComponent, AddComponent, WithdrawComponent, TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
