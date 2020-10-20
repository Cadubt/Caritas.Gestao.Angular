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
      edit: false,
      date: [null],
      time: [null],
      message: [null],
      })
  }

}
