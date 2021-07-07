import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserConfigurationService } from 'src/app/Core/user-Configuration.Service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.scss']
})
export class UserConfigurationComponent implements OnInit {

  constructor(
    private router: Router,
    private userConfigurationService: UserConfigurationService
  ) { }

  ngOnInit(): void {
  }

}
