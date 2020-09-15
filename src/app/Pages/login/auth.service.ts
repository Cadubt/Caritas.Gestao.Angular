import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(){
    this.showMenuEmitter.emit(true);
    return this.router.navigate(['/dashboard'])
  }
}
