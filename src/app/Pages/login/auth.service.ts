import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public showMenuEmitter = new EventEmitter<boolean>();

  isMenuShowing = true;

  constructor(
    private router: Router,
  ) { }




  fazerLogin(){
    this.showMenuEmitter.emit(true);
    this.isMenuShowing = true;
    return this.router.navigate(['/dashboard'])
  }

  hideMenu(){
    return this.showMenuEmitter.emit(false);
  }
}
