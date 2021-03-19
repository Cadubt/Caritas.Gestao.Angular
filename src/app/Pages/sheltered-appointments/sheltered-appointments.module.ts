import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatIconModule } from '@angular/material/icon';

import { ShelteredAppointmentsComponent } from './sheltered-appointments.component';


@NgModule({
  declarations: [ShelteredAppointmentsComponent],
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
  ]
})
export class ShelteredAppointmentsModule { }
