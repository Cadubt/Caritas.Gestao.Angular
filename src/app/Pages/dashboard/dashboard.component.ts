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

  shelteredTable: Array<shelteredTable> = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'age', 'birthDate'];

  dataSource = new MatTableDataSource();
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private shelteredService: ShelteredService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getShelteredList();
  }

  ngAfterViewInit() {
    this.getShelteredList();
    this.dataSource.sort = this.sort;
  }

  goToNewShelteredAppointmentForm(){
    this.router.navigate(['/new-sheltered-appointment'])
  }

  getShelteredList(){
    this.shelteredService.getShelteredList().subscribe((res: any) => {
      this.shelteredTable = res.data;
      this.dataSource = new MatTableDataSource(this.shelteredTable)
    })    
  }
}
