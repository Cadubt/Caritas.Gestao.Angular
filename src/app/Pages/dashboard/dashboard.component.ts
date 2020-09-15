import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface shelteredTable{
  name: string;
  surname: string;
  shelteredId: number;
  DOB: string;
}

const ELEMENT_DATA: shelteredTable[] = [
  {shelteredId: 1, name: 'José', surname: 'Silva', DOB: '01/01/1940', },
  {shelteredId: 2, name: 'João', surname: 'Souza', DOB: '01/01/1940', },
  {shelteredId: 3, name: 'Pedro', surname: 'Oliveira', DOB: '01/01/1940',},
  {shelteredId: 4, name: 'Tiago', surname: 'Almeida', DOB: '01/01/1940', },
  {shelteredId: 5, name: 'Tadeu', surname: 'Rocha', DOB: '01/01/1940', },
  {shelteredId: 6, name: 'Judas', surname: 'Schmidt', DOB: '01/01/1940', },
  {shelteredId: 7, name: 'Felipe', surname: 'de la Vega', DOB: '01/01/1940', },
  {shelteredId: 8, name: 'João Batista', surname: 'Martinez', DOB: '01/01/1940', },
  {shelteredId: 9, name: 'Honda', surname: 'Nakasone', DOB: '01/01/1940', },
  {shelteredId: 10, name: 'Andrea', surname: 'Corleone', DOB: '01/01/1940', },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  displayedColumns: string[] = ['shelteredId', 'name', 'surname', 'DOB'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    
    ) { }

  ngOnInit(): void {
  }



}
