import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { UserConfigurationService } from 'src/app/Core/user-configuration.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.scss']
})
export class UserConfigurationComponent implements OnInit {

  userConfigurationForm = new FormGroup({
    firstName: new FormControl()
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userConfigurationService: UserConfigurationService
  ) { }

  error;
  usuario;

  ngOnInit(): void {
  }
  createForm() {
    this.userConfigurationForm = this.formBuilder.group({
      id: [null],
      name: [null],
      password: [null],
      newPassword: [null],
      repeatPassword: [null],
      email: [null],
      role: [null],
      createdAt: [null],
      deletedAt: [null]
    })
  }
}
