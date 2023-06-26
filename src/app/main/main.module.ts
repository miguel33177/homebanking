import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
