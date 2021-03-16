import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrontDeskComponent } from './front-desk.component';



@NgModule({
  declarations: [FrontDeskComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatInput,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatInput,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class FrontDeskModule { }
