import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    SidenavComponent,
    MatListModule,
  ]
})
export class SidenavModule { }
