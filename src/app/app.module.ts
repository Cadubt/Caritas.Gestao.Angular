import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    SidenavModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, AuthService, HttpClientModule, ShelteredService, SidenavMenuService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
