import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidenavMenuService {

  constructor(private http: HttpClient) { }

  getMenuList(){
    let url = 'http://www.api-caritas.cadubt.com.br/api/Menu/ListMenu?UserID=1';

    return this.http.get(url)
  }
}
