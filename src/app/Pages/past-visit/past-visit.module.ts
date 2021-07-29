import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PastVisitComponent } from './past-visit.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [PastVisitComponent],
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
    MatListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PastVisitModule { }
