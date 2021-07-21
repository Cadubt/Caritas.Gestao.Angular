import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.BASE_URL_API;
@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserById(){
    var urlString=`${API_URL}User/GetUserById`;
    return this.http.get(urlString)
  }
}
