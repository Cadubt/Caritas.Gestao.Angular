import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PastVistService } from 'src/app/Core/past-vist.service';
import { visitorModel } from 'src/app/Models/visitorModel';

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

  kinshipList: string[] = [
    '.',
    'Pai',
    'Mãe',
    'Filho',
    'Filha',
    'Cônjuge',
    'Nora',
    'Genro',
    'Sogro',
    'Sogra',
    'Cunhado',
    'Cunhada',
    'Primo',
    'Prima',
    'Tio',
    'Tia',
    'Sobrinho',
    'Sobrinha',
    'Sobrinho-neto',
    'Sobrinha-neta',
    'Amigo',
    'Amiga',
    'Bisneto',
    'Bisneta',
    'Nenhum',
    'Neto',
    'Neta'];
    
  for(let visitor of visitorModel) {
    console.log(kinship)
  }
  for(let i = 0; i<value.length; i++) {

}

visitorModel;
visitorModelNotDeclared;
erro;

ngOnInit(): void {
  this.getVistorList();
}

onNavigateTo(pageName) {
  this.router.navigate([`/${pageName}`]);
}

getVistorList() {
  this.pastVisitService.getVistorList().subscribe(
    (res: any) => {
      this.visitorModel = res.data;
      /*foreacth visitor dentro do visitorModel
      for kinship
      {
        kinship[i] == visitor.Kinship
        visitorModelTreated.kinshipId = kinship
      }*/
      console.log('Restorno do Endpoint: ', res.data);
    },
    (error: any) => {
      this.erro = error;
      console.log('Restorno do Endpoint: ', error);
    }
  )
}


}

