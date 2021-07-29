import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { FrontDeskComponent } from './front-desk.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [FrontDeskComponent],
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
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontDeskModule { }
