import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShelteredService {

  constructor(private http: HttpClient) { }

  

  listShelteredServ(): Observable<any>{  
    
    return this.http.get<any[]>("http://localhost:63723/api/Sheltered/ListSheltereds?statusId=1");
  }
}
