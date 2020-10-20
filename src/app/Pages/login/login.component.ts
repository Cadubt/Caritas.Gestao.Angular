import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AuthService } from './auth.service';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

const API_URL = environment.BASE_URL_API;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  hide = true;
  showMenu = false;

  constructor(
    private AuthService: AuthService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    ) { }


  ngOnInit(): void {
    this.AuthService.hideMenu();
    this.AuthService.isMenuShowing = false;
    this.createForm();
  }

  ngAfterViewInit(){
    this.AuthService.hideMenu();
    this.AuthService.isMenuShowing = false;
  }
  
  fazerLogin(){
    
this.AuthService.fazerLogin();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
userName: [null, [Validators.required]],
password: [null, [Validators.required]]
    })
  }

authenticate( ) {
  this.AuthService.fazerLogin();
  // const userName = this.loginForm.get('userName').value;
  // const options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   }),
  //   body: userName,
  // };
  // this.http.get(API_URL + 'api/User/GetUser/' + userName).subscribe((res: any) => {
  // console.log("deu certo esssa bagaça: ", res.data)

  // }, err => {
  //   this.snackbar.open(
  //     'nada a ver brow, tenta denovo',
  //     'Tendeu',
  //     { horizontalPosition: 'right', verticalPosition: 'top', duration: 4000 });
  //   this.loginForm.controls['userName'].reset();
  //   this.loginForm.controls['password'].reset();
  // })
}



}
