import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginModule,
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})

export class PagesModule { }
