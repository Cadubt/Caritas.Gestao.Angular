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

  goToNewShelteredAppointmentForm(){
    this.router.navigate(['/new-sheltered-appointment']);
    this.onSidenavClose();
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
    this.onSidenavClose();
  }

  goToAdmin(){
    this.router.navigate(['/admin']);
    this.onSidenavClose();
  }

}
