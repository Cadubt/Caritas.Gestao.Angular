import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewShelteredAppointmentFormModule } from './new-sheltered-appointment-form/new-sheltered-appointment-form.module';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { SocialServiceModule } from './social-service/social-service.module';
import { RecordVisitModule } from './record-visit/record-visit.module';
import { PastVisitModule } from './past-visit/past-visit.module';
import { ShelteredAppointmentsModule } from './sheltered-appointments/sheltered-appointments.module';
import { NewShelteredModule } from './new-sheltered/new-sheltered.module';
import { AdminConfigurationModule } from './admin-configuration/admin-configuration.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AlthorizeSheltRegisterModule } from './althorize-shelt-register/althorize-shelt-register.module';
import { ListUsersModule } from './list-users/list-users.module';
import { LogInfoModule } from './log-info/log-info.module';
import { UserConfigurationModule } from './user-configuration/user-configuration.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminConfigurationModule,
    AdminDashboardModule,
    AlthorizeSheltRegisterModule,
    DashboardModule,
    FrontDeskModule,
    ListUsersModule,
    LogInfoModule,
    LoginModule,
    NewShelteredModule,
    NewShelteredAppointmentFormModule,
    PastVisitModule,
    RecordVisitModule,
    ShelteredAppointmentsModule,
    SocialServiceModule,
    UserConfigurationModule,
    UserDashboardModule,
  ],
  exports: [],
  schemas: []
})
export class PagesModule { }
