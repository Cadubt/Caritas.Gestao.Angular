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

  constructor(
    private router: Router,
    private pastVisitService: PastVistService
  ) { }

  visitorModel;
  Error;

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

        //Varedura na lista de visitantes
        //for (let v = 0; v < this.visitorModel.length; v++) // jeito simplificado tradicional de escrever for 
        for (let v in this.visitorModel) {// Jeito mais simplificado de escrever for //CADU e um por um em diante
          //varredura na lista de parentesco (array)
          //for (let i = 0; i < this.kinshipList.length; i++) 
          for (let i in this.kinshipList) {
            //O Id parentesco do visitante é igual a posição do array que estou vendo agora?
            if (this.visitorModel[v].kinshipId == this.kinshipList.indexOf(this.kinshipList[i],)) {
              //Se sim, substitua o numero kinship pelo texto kinship
              this.visitorModel[v].kinshipId = this.kinshipList[i];
            }
          }
        }
        /*foreacth visitor dentro do visitorModel
        for kinship
        {
          kinship[i] == visitor.Kinship
           visitorModelTreated.kinshipId = kinship
        }*/
      },
      (error: any) => {
        this.Error = error;
      }
    )
  }

}



