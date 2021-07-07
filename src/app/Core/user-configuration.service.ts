import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_URL = environment.BASE_URL_API;
@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserById(){
    var urlString=`${API_URL}User/GetUserById?UserId=6`;
    return this.http.get(urlString)
  }

}

