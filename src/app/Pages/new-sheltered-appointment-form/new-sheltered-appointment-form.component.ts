import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSheetService } from 'src/app/Core/schedule-sheet.service';


@Component({
  selector: 'app-new-sheltered-appointment-form',
  templateUrl: './new-sheltered-appointment-form.component.html',
  styleUrls: ['./new-sheltered-appointment-form.component.scss']
})
export class NewShelteredAppointmentFormComponent implements OnInit {

  shelteredAppointment: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private scheduleSheetService: ScheduleSheetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.shelteredAppointment = this.formBuilder.group({
      shelteredName: [null],
      shelteredAge: [null],
      shelteredPhone: [null],
      shelteredAddress: [null],
      responsibleName: [null],
      kinshipId: [null],
      responsiblePhone: [null],
      responsibleAddress: [null],
      interviewDate: [null],
      scheduleDate: [null],
      observation: [null],
      scheduleResponsible: [null],
      createdAt: [null],
      deletedAt: [null]
    })
  }

  onSubmit() {
    const formData = this.shelteredAppointment.getRawValue();
    console.log(formData)
    this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
  }
}
