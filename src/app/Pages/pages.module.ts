import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule} from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { FrontDeskComponent } from './front-desk/front-desk.component';
import { RecordVisitComponent } from './record-visit/record-visit.component';



@NgModule({
  declarations: [FrontDeskComponent, RecordVisitComponent],
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
