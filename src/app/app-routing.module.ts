import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { NewShelteredAppointmentFormComponent } from './pages/new-sheltered-appointment-form/new-sheltered-appointment-form.component';
import { AdminComponent } from './pages/admin/admin.component'

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
    path: 'admin',
    component: AdminComponent ,
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
