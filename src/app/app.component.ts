import { Component } from '@angular/core';
import { AuthService } from './pages/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Caritas Gestão';
  showMenu;

  constructor (
    private authService: AuthService,
  ) { }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
  }
}
