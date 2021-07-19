import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.BASE_URL_API;
@Injectable({
  providedIn: 'root'
})
export class AdminConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserById(){
    var urlString=`${API_URL}User/GetUserById?UserId=6`;
    return this.http.get(urlString)
  }

  updateUser(FormData: any): Observable<any> {
    return this.http.put(`${API_URL}User/Update`, FormData);
  }
}
