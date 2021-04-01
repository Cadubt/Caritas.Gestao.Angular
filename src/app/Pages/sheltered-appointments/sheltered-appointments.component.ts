import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSheetService } from 'src/app/Core/schedule-sheet.service';
@Component({
  selector: 'app-sheltered-appointments',
  templateUrl: './sheltered-appointments.component.html',
  styleUrls: ['./sheltered-appointments.component.scss']
})
export class ShelteredAppointmentsComponent implements OnInit {
  shelteredAppointment: FormGroup;
  constructor(
    private router: Router,
    private scheduleSheetService: ScheduleSheetService) { }

    scheduleModel;
    erro;
  ngOnInit(): void {
    
    this.getShelteredList();

  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

  onSubmit() {
    const formData = this.shelteredAppointment.getRawValue();
    console.log(formData)
    this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
  }

  //** *Method to get a List of Schedule Items */
  getShelteredList() {
    this.scheduleSheetService.getScheduleList().subscribe(
      (res: any) => {
        this.scheduleModel = res.data;
        console.log('Dado sendo recebido: ', res.data);
      },
      (error: any) => {
        this.erro = error;
        console.log('Ocorreu o seguinte Erro: ', error);
      }
    );
  }
}
