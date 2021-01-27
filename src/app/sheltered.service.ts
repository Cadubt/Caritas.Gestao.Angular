import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { resolve } from 'dns';
;
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShelteredService {
  
  constructor(private http: HttpClient) { }

  lista = [];

  

  listShelteredServ(){  
    var urlString = 'http://localhost:63723/api/Sheltered/ListSheltereds?statusId=1';

    // return this.http.get(urlString).toPromise();

    this.http.get(urlString).subscribe((res) => {
      this.lista = res["data"];
      console.log(this.lista);
    });

    

  }
}
