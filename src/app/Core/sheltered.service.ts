import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
;


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
    var urlString = 'http://www.api-caritas.cadubt.com.br/api/Sheltered/ListSheltereds?statusId=1';
    return this.http.get(urlString)
  }
}
