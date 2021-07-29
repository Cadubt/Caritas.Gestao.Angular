import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { NewShelteredAppointmentFormComponent } from './pages/new-sheltered-appointment-form/new-sheltered-appointment-form.component';
import { FrontDeskComponent } from './pages/front-desk/front-desk.component';
import { RecordVisitComponent } from './pages/record-visit/record-visit.component';
import { PastVisitComponent } from './pages/past-visit/past-visit.component';
import { SocialServiceComponent } from './pages/social-service/social-service.component';
import { ShelteredAppointmentsComponent } from './pages/sheltered-appointments/sheltered-appointments.component';
import { NewShelteredComponent } from './pages/new-sheltered/new-sheltered.component';
import { UserConfigurationComponent } from './Pages/user-configuration/user-configuration.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AlthorizeSheltRegisterComponent } from './pages/althorize-shelt-register/althorize-shelt-register.component';
import { AdminConfigurationComponent } from './pages/admin-configuration/admin-configuration.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { LogInfoComponent } from './pages/log-info/log-info.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'new-sheltered-appointment',
    component: NewShelteredAppointmentFormComponent ,
  },

  {
    path: 'front-desk',
    component: FrontDeskComponent ,
  },

  {
    path: 'record-visit',
    component: RecordVisitComponent ,
  },

  {
    path: 'past-visit',
    component: PastVisitComponent ,
  },

  {
    path: 'social-service',
    component: SocialServiceComponent ,
  },

  {
    path: 'sheltered-appointments',
    component: ShelteredAppointmentsComponent ,
  },

  {
    path: 'new-sheltered',
    component: NewShelteredComponent ,
  },

  {
    path: 'user-configuration',
    component: UserConfigurationComponent ,
  },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent ,
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent ,
  },

  {
    path: 'althorize-shelt-register',
    component: AlthorizeSheltRegisterComponent,
  },

  {
    path: 'admin-configuration',
    component: AdminConfigurationComponent,
  },

  {
    path: 'list-users',
    component: ListUsersComponent,
  },

  {
    path: 'log-info',
    component: LogInfoComponent,
  },



  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
