import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class RecordVisitService {

  constructor(
    private http: HttpClient
  ) { }

    createVisit(FormData: any): Observable<any> {
      return this.http.post(`${API_URL}Visitor/CreateVisitors`, FormData);
    }

}


  



