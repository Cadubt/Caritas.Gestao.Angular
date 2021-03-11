import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class ShelteredService {

  constructor(private http: HttpClient) { }

  /**
   * Method to get a List of Sheltered Items
   * @returns 
   */
  getShelteredList() {
    var urlString = `${API_URL}Sheltered/ListSheltereds?statusId=1`;
    return this.http.get(urlString)
  }

  
}
