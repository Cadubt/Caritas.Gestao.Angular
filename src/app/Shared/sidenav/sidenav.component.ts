import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
