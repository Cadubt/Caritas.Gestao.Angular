import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShelteredAppointmentFormComponent } from './new-sheltered-appointment-form.component';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 

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
    MatDatepickerModule 
  ]

})
export class NewShelteredAppointmentFormModule { }
