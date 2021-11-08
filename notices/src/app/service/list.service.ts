import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(private _http:HttpClient) { }

  public list(): Observable<any>{
    return this._http.get<Notice[]>(`http://localhost:8080/notices/`)
  }


}
