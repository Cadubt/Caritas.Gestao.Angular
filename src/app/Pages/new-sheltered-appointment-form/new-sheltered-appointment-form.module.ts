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
import { MatSelectModule } from '@angular/material/select';
import { NewShelteredAppointmentFormComponent } from './new-sheltered-appointment-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [NewShelteredAppointmentFormComponent],
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NewShelteredAppointmentFormModule { }
