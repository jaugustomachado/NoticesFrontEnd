import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private _http:HttpClient) { }


  public save(notice:Notice):Observable<any>{
    return  this._http.post<any>("http://localhost:8080/notices/",notice)
  }




}
