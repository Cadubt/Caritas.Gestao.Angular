import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { ShelteredModel } from 'src/app/Models/shelteredModel';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  shelteredModel;
  erro;

  formGroup: FormGroup;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shelteredModel.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private shelteredService: ShelteredService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getShelteredList();
  }

  ngAfterViewInit() {
    this.getShelteredList();
  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

  /**
   * Method to get a List of Sheltered Items
   */
  getShelteredList() {
    this.shelteredService.getShelteredList().subscribe(
      (res: any) => {
        this.shelteredModel = res.data;
        console.log('Dado sendo recebido: ', res.data);
      },
      (error: any) => {
        this.erro = error;
        console.log('Ocorreu o seguinte Erro: ', error);
      }
    );
  }
}
