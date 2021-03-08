import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/sheltered.service';

export interface shelteredTable{
  address: string;
  age: number;
  birthDate: string;
  bloodTyping: string;
  createdAt: string;
  deceaseAt: string;
  deletedAt: string;
  entryDate: string;
  id: number;
  name: string;
  perfilImage: string;
  phone: string;
  statusId: number;
}

const ELEMENT_DATA: shelteredTable [] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit  {

  shelteredTable;

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shelteredTable.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private shelteredService: ShelteredService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getShelteredList();
  }

  ngAfterViewInit() {
    this.getShelteredList();
  }

  goToNewShelteredAppointmentForm(){
    this.router.navigate(['/new-sheltered-appointment'])
  }

  getShelteredList(){
    this.shelteredService.getShelteredList().subscribe((res: any) => {
      this.shelteredTable = res.data;
    })    
  }
}
