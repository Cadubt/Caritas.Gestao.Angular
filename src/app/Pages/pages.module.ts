import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule} from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { FrontDeskComponent } from './front-desk/front-desk.component';



@NgModule({
  declarations: [FrontDeskComponent],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    NewShelteredAppointmentFormModule,
  ],
  exports:[LoginModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
