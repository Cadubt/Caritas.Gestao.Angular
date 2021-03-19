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

  ngOnInit(): void {
  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

  onSubmit() {
    const formData = this.shelteredAppointment.getRawValue();
    console.log(formData)
    this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
  }
}
