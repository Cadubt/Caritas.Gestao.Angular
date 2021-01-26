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
import { ShelteredService } from './sheltered.service';

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
    HttpClientModule
  ],
  exports: [
    MatSidenavModule,
    SidenavModule
  ],
  providers: [AuthService, HttpClientModule, ShelteredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
