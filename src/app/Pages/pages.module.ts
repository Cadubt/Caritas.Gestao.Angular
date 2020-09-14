import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module'

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports:[LoginModule]
})
export class PagesModule { }
