import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddComponent } from '../features/add/add.component';
import { TransactionsComponent } from '../features/transactions/transactions.component';
import { WithdrawComponent } from '../features/withdraw/withdraw.component';
import { NavbarComponent } from '../features/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    AddComponent,
    TransactionsComponent,
    WithdrawComponent,MainComponent, NavbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
