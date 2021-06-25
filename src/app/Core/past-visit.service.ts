import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const API_URL = environment.BASE_URL_API;


@Injectable({
  providedIn: 'root'
})
export class PastVisitService {

  constructor(private http:HttpClient) { }


  getVisitList(){
    var urlString = `${API_URL}Visitor/ListVisitors?visitDate=2021-02-28`;
    return this.http.get(urlString)
  }
}
