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

const ELEMENT_DATA: shelteredTable[] = [
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['shelteredId', 'name', 'surname', 'DOB'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
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
    this.listSheltered();
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  goToNewShelteredAppointmentForm(){
    this.router.navigate(['/new-sheltered-appointment'])
  }

  listSheltered(){
    this.shelteredService.listShelteredServ()    
  }
}
