import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private _http:HttpClient) { }


  public update(id:number,notice:Notice):Observable<any>{
    return  this._http.put<any>(`${"http://localhost:8080/notices/"}${id}`,notice)
  }
}