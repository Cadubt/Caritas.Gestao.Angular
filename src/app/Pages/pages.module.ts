import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule} from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { AdminComponent } from '../pages/admin/admin.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    NewShelteredAppointmentFormModule,
    AdminComponent,
  ],
  exports:[LoginModule]
})
export class PagesModule { }
