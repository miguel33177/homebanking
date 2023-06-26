import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AddComponent } from '../features/add/add.component';
import { WithdrawComponent } from '../features/withdraw/withdraw.component';
import { TransactionsComponent } from '../features/transactions/transactions.component';


const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'addFunds', component:AddComponent},
  {path:'withdrawFunds', component:WithdrawComponent},
  {path:'transactions', component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
