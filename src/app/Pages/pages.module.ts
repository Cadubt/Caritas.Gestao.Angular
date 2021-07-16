import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule} from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { SocialServiceModule } from './social-service/social-service.module';
import { UserConfigurationModule } from './user-configuration/user-configuration.module';
import { RecordVisitModule } from './record-visit/record-visit.module';
import { PastVisitModule } from './past-visit/past-visit.module';
import { ShelteredAppointmentsModule } from './sheltered-appointments/sheltered-appointments.module';
import { NewShelteredModule } from './new-sheltered/new-sheltered.module';
import { AdminConfigurationComponent } from './admin-configuration/admin-configuration.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LogInfoComponent } from './log-info/log-info.component';
import { AlthorizeSheltRegisterComponent } from './althorize-shelt-register/althorize-shelt-register.component';




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
  exports:[LoginModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
