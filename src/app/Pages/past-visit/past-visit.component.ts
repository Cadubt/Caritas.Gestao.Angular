import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PastVistService } from 'src/app/Core/past-vist.service';

@Component({
  selector: 'app-past-visit',
  templateUrl: './past-visit.component.html',
  styleUrls: ['./past-visit.component.scss']
})
export class PastVisitComponent implements OnInit {

  constructor(
    private router: Router, 
    private pastVisitService: PastVistService
    ) { }

    visitorModel;
    erro;

  ngOnInit(): void {
    this.getVistorList();
  }  

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }


  getVistorList() {
    this.pastVisitService.getVistorList().subscribe(
      (res: any) =>{
        this.visitorModel = res.data;
        console.log('Restorno do Endpoint: ', res.data);
      },
      (error: any) =>{
        this.erro = error;
        console.log('Restorno do Endpoint: ', error);
      }
    )
  }
  

}
