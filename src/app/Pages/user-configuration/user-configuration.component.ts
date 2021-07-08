import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserConfigurationService } from 'src/app/Core/user-Configuration.Service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.scss']
})
export class UserConfigurationComponent implements OnInit {

  // userConfigurationForm: FormGroup;

  userConfigurationForm = new FormGroup({
    firstName: new FormControl()
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userConfigurationService: UserConfigurationService
  ) {

  }

  error;
  usuario;

  ngOnInit(): void {
    this.getUserConfigurationData();
    this.createForm();
  }

  onNavigateTo(pageName) {
    this.router.navigate([`/${pageName}`]);
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

  getUserConfigurationData() {
    this.userConfigurationService.getUserById().subscribe(
      (res: any) => {
        this.usuario = res.data;
        console.log(this.usuario)

      })

  }

  onSubmit() {
    const actualPassword = this.userConfigurationForm.get('password').value;
    const newPassword = this.userConfigurationForm.get('newPassword').value;
    const repeatPassword = this.userConfigurationForm.get('repeatPassword').value;

    //Ele quer atualizar a senha
    if (actualPassword != null && actualPassword != '') {
      if (newPassword == repeatPassword) {
        //Atualiza todo o usuario
      }
      else {
        alert('As senhas não coincidem');
      }
    }
    //Ele não quer atualizar a senha
    else {
      //Atualiza o usuario menos a senha que permanecerá a mesma
    }




  }
}
