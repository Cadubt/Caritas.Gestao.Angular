import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

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
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.shelteredForm = this.formBuilder.group({
      name: [null],
      age: [null],
      birthDate: [null],
      phone: [null],
      address: [null],
      bloodTyping: [null],
      entryDate: [null],
      perfilImage: 'https://rochaemouta.com.br/wp-content/uploads/2017/05/carencia.jpg',
      deceaseAt: [null],
      statusId: 1,
      createdAt: [null],
      deletedAt: [null]
    })
  }

  onSubmit() {
    
    const formData = this.shelteredForm.getRawValue();
    formData.entryDate = formData.birthDate;
    console.log(formData)
    this.shelteredService.createSheltered(formData).subscribe(res => { });
  }

}
