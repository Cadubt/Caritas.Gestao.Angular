import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminConfigurationService } from 'src/app/Core/admin-configuration.service';

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.scss']
})
export class AdminConfigurationComponent implements OnInit {

  adminConfigurationForm = new FormGroup({
    firstName: new FormControl()
  });


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private adminConfigurationService: AdminConfigurationService,
  ) {

  }

  error;
  usuario;
  UserModel;

  ngOnInit(): void {
    this.getAdminConfigurationData();
    this.createForm();
  }

  onNavigateTo(pageName) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.adminConfigurationForm = this.formBuilder.group({
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
    this.usuario = this.formBuilder.group({
      id: [null],
      name: [null],
      password: [null],
      email: [null],
      role: [null],
      createdAt: [null],
      deletedAt: [null]
    })
  }

  getAdminConfigurationData() {
    this.adminConfigurationService.getUserById().subscribe(
      (res: any) => {
        console.log(this.usuario)
        this.usuario = res.data;
        console.log(this.usuario)


      })


  }


  onSubmit() {
    const actualPassword = this.adminConfigurationForm.get('password').value;
    const newPassword = this.adminConfigurationForm.get('newPassword').value;
    const repeatPassword = this.adminConfigurationForm.get('repeatPassword').value;

    this.usuario.name = this.adminConfigurationForm.get('name').value;
    this.usuario.email = this.adminConfigurationForm.get('email').value;
    if (actualPassword != null && actualPassword != '') {
      if (actualPassword == this.usuario.password) {
        if (newPassword == repeatPassword) {

          this.usuario.name = this.adminConfigurationForm.get('name').value;
          this.usuario.email = this.adminConfigurationForm.get('email').value;
          this.usuario.password = this.adminConfigurationForm.get('newPassword').value;
          this.adminConfigurationService.updateUser(this.usuario).subscribe(res => { });
        }
        else {
          alert('As senhas não coincidem');
          window.location.reload();
        }
      }
      else {
        alert("Sua senha atual esta errada");
        window.location.reload();
      }
    }
    //Ele não quer atualizar a senha
    else {
      this.usuario.name = this.adminConfigurationForm.get('name').value;
      this.usuario.email = this.adminConfigurationForm.get('email').value;
      this.adminConfigurationService.updateUser(this.usuario).subscribe(res => { });
    }

    alert("Usuário atualizado com sucesso");
  }
}