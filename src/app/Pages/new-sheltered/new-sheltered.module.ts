import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatIconModule } from '@angular/material/icon';
import { NewShelteredComponent } from './new-sheltered.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [NewShelteredComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports:[],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewShelteredModule { }
