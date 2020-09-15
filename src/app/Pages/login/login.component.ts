import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
// import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  showMenu = false;

  constructor(private AuthService: AuthService) { }


  ngOnInit(): void {
    this.AuthService.hideMenu();
  }

  fazerLogin(){
this.AuthService.fazerLogin();
  }
}
