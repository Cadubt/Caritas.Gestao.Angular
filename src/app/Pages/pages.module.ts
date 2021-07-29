import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule} from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { SocialServiceModule } from './social-service/social-service.module';
import { RecordVisitModule } from './record-visit/record-visit.module';
import { PastVisitModule } from './past-visit/past-visit.module';
import { ShelteredAppointmentsModule } from './sheltered-appointments/sheltered-appointments.module';
import { NewShelteredModule } from './new-sheltered/new-sheltered.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    FrontDeskModule,
    SocialServiceModule,
    NewShelteredAppointmentFormModule,
    PastVisitModule,
    RecordVisitModule,
    ShelteredAppointmentsModule,
    NewShelteredModule,
  ],
  exports:[],
  schemas: []
})
export class PagesModule { }
