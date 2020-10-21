import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule 
  ],
  exports: [LoginComponent, MatInputModule,
    MatFormFieldModule, MatIconModule,
    MatButtonModule]
})
export class LoginModule { }
