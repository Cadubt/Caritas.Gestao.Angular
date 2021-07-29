import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
