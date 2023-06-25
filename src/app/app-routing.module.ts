import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'login', loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
