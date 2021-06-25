import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PastVisitService } from 'src/app/Core/past-visit.service';
import { MatCommonModule } from '@angular/material/core';
@Component({
  selector: 'app-past-visit',
  templateUrl: './past-visit.component.html',
  styleUrls: ['./past-visit.component.scss']
})
export class PastVisitComponent implements OnInit {
  PastVisitService: any;

  constructor(
    private router: Router,
    private pastVisitService: PastVisitService
    ) { }

  visitorModel;
  erro;

  ngOnInit(): void {
    this.getVisitList()
    
  }


  onNavigateTo(pageName) {
    this.router.navigate([`/${pageName}`]);
  }



  getVisitList() {
    this.pastVisitService.getVisitList().subscribe(
      (res: any) =>{
        this.visitorModel = res.data;
        console.log('Dado sendo recebido: ', res.data);
      },
      (error: any) => {
        this.erro = error;
        console.log('Ocorreu o seguinte Erro: ', error);
      }
    );
  }
}
