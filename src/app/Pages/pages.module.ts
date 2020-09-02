import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports:[LoginModule]
})
export class PagesModule { }
