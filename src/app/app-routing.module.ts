import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { NewShelteredAppointmentFormComponent } from './pages/new-sheltered-appointment-form/new-sheltered-appointment-form.component';
import { FrontDeskComponent } from './pages/front-desk/front-desk.component';
import { RecordVisitComponent } from './pages/record-visit/record-visit.component';
import { PastVisitComponent } from './pages/past-visit/past-visit.component';


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

  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
