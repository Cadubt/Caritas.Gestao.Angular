import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HeaderModule } from './Shared/header/header/header.module';
import { FooterModule } from './Shared/footer/footer.module';
import { AuthService } from './pages/login/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavModule } from '../app/Shared/sidenav/sidenav.module';

import { HttpClientModule } from '@angular/common/http';
import { ShelteredService } from './Core/sheltered.service';
import { SidenavMenuService } from './Shared/sidenav/sidenav-menu.service'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { UserDashboardModule } from './Pages/user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './Pages/admin-dashboard/admin-dashboard.module';
import { AlthorizeSheltRegisterModule } from './Pages/althorize-shelt-register/althorize-shelt-register.module';
import { AdminConfigurationModule } from './Pages/admin-configuration/admin-configuration.module';
import { ListUsersModule } from './Pages/list-users/list-users.module';
import { LogInfoModule } from './Pages/log-info/log-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    HeaderModule,
    FooterModule,
    MatSidenavModule,
    SidenavModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    UserDashboardModule,
    AdminDashboardModule,
    AlthorizeSheltRegisterModule,
    AdminConfigurationModule,
    ListUsersModule,
    LogInfoModule
  ],
  exports: [
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, AuthService, HttpClientModule, ShelteredService, SidenavMenuService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
