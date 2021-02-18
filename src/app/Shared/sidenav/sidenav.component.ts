import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavMenuService } from './sidenav-menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  menuList;

  constructor(private router: Router,
              private service: SidenavMenuService) { }

  ngOnInit(): void {
    this.getMenuList()
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  navigateTo(pageName){
    this.router.navigate([`/${pageName}`]);
    this.onSidenavClose();
  }

  getMenuList(){
    this.service.getMenuList().subscribe((res: any) => {
    this.menuList = res.data
    }) 
  }

}
