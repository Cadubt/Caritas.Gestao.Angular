import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';

@Component({
  selector: 'app-new-sheltered',
  templateUrl: './new-sheltered.component.html',
  styleUrls: ['./new-sheltered.component.scss']
})
export class NewShelteredComponent implements OnInit {

  shelteredForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.shelteredForm = this.formBuilder.group({
      
    })
  }

  onSubmit() {
    // const formData = this.shelteredAppointment.getRawValue();
    // console.log(formData)
    // this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
  }

}
