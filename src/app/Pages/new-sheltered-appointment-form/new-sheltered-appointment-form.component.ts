import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-sheltered-appointment-form',
  templateUrl: './new-sheltered-appointment-form.component.html',
  styleUrls: ['./new-sheltered-appointment-form.component.scss']
})
export class NewShelteredAppointmentFormComponent implements OnInit {

shelteredAppointment: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.shelteredAppointment = this.formBuilder.group({
      ShelteredName: [null],
      ShelteredAge:[null],
      ShelteredPhone: [null],
      Id: [null],
      ShelteredAddress: [null],
      ShelteredAddressNumber: [null],
      ShelteredAddressZipCode: [null],
      ResponsibleName: [null],
      KinshipId: [null],
      ResponsiblePhone: [null],
      ResponsibleAddress: [null],
      ResponsibleAddressNumber: [null],
      ResponsibleAddressZipCode: [null],
      InterviewDate: [null],
      ScheduleDate: [null],
      Observation: [null],
      ScheduleResponsible: [null],
      CreatedAt: [null],
      DeletedAt: [null],
      })
  }

  onSubmit(){
    console.log(this.shelteredAppointment)
  }
}
