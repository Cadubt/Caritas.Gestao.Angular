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

  userConfigurationForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userConfigurationService: UserConfigurationService
  ) { 

  }
  userConfigurationModel;
  error;
  usuario;
  ngOnInit(): void {
    this.getUserConfigurationData();
  }

  onNavigateTo(pageName) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm(){
    this.userConfigurationForm = this.formBuilder.group({
      id: [null],
      name: [null],
      password: [null],
      email: [null],
      role: [null],
      createdAt:[null],
      deletedAt:[null] 
    })
  }

  getUserConfigurationData() {
   this.userConfigurationService.getUserById().subscribe(
     (res:any) => {
       this.usuario = res.data;
       console.log(this.usuario)
      })
   
  }

}
