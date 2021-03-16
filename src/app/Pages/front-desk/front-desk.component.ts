import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.scss']
})
export class FrontDeskComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }

}
