import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.scss']
})
export class LogInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
  }


}
