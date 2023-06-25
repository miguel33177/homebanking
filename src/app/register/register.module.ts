import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
