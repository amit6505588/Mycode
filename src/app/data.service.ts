import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }
  getFestivalDetails():Observable<any>{
    return this.http.get('http://localhost:3000/data');

  }
}
