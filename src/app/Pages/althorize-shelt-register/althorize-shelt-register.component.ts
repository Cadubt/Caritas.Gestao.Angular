import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-althorize-shelt-register',
  templateUrl: './althorize-shelt-register.component.html',
  styleUrls: ['./althorize-shelt-register.component.scss']
})
export class AlthorizeSheltRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }


}
