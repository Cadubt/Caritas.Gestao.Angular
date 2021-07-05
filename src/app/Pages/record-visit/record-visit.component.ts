import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordVisitService } from 'src/app/Core/record-visit.service';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.scss']
})
export class RecordVisitComponent implements OnInit {

 recordVisitForm: FormGroup;
  

  constructor(
   private formBuilder: FormBuilder,
   private recordVisitService: RecordVisitService,
   private router: Router) {

    }
    creatvisitorModel;
    erro;
  ngOnInit(): void {
    this.createForm();
  }

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }

  createForm(){
    this.recordVisitForm = this.formBuilder.group({
      name: [null],
      phone: [null],
      kinshipId: [null],
      adress: [null],
      rg: [null],
      shelteredId: 1,
      visitDate: [null] 
    })
    
  }
  onSubmit() {
    const formData = this.recordVisitForm.getRawValue();
    // console.log(formData)
    this.recordVisitService.createVisit(formData).subscribe(res => { });
    console.log(formData);
    window.alert("Salvo com Sucesso")
   // window.location.href = "past-visit"; // vai para a pasta: "past-visit"
  }

}