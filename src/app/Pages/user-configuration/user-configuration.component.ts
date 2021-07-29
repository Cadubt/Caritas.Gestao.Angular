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
  UserModel;

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

  getUserConfigurationData() {
    this.userConfigurationService.getUserById().subscribe(
      (res: any) => {
        console.log(this.usuario)
        this.usuario = res.data;
        console.log(this.usuario)
        

      })

  }

  onSubmit() {
    const actualPassword = this.userConfigurationForm.get('password').value;
    const newPassword = this.userConfigurationForm.get('newPassword').value;
    const repeatPassword = this.userConfigurationForm.get('repeatPassword').value;

    this.usuario.name = this.userConfigurationForm.get('name').value;
    this.usuario.email = this.userConfigurationForm.get('email').value;



    //Ele quer atualizar a senha
    if (actualPassword != null && actualPassword != '') {
      if (actualPassword == this.usuario.password) {
        if (newPassword == repeatPassword) {
          
          this.usuario.name = this.userConfigurationForm.get('name').value;
          this.usuario.email = this.userConfigurationForm.get('email').value;
          this.usuario.password = this.userConfigurationForm.get('newPassword').value;
          this.userConfigurationService.updateUser(this.usuario).subscribe(res => { });
        }
        else {
          alert('As senhas não coincidem');
          window.location.reload();
        }
      }
      else{
        alert("Sua senha atual esta errada");
        window.location.reload();
      }      
    }
    //Ele não quer atualizar a senha
    else {
      this.usuario.name = this.userConfigurationForm.get('name').value;
      this.usuario.email = this.userConfigurationForm.get('email').value;
      this.userConfigurationService.updateUser(this.usuario).subscribe(res => { });
    }

    alert("Usuário atualizado com sucesso");
  }
}
